import { Component } from '@angular/core';
import { ModalController , NavController, NavParams, LoadingController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
import { IncluirAulaCursoComplementarPage } from '../incluir-aula-curso-complementar/incluir-aula-curso-complementar';

/**
 * Generated class for the CursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso-complementar',
  templateUrl: 'curso-complementar.html',
})
export class CursoComplementarPage {

  noticia: any = {};
  noticias: any = [];
  constructor(public nav: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawRequestsPage');
    this.getAllNoticias();
  }

  save() {
    this.upload();
    firebase.database().ref('cursoComplementar/').push().update(this.noticia).then(data => {
      this.displayToast("Upado com sucesso")
    });
  }

  chooseFile() { document.getElementById('imgNoticia').click(); }

  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    let loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
    loading.present();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('imgNoticia')).files[0]]) {
      let path = '/aulaCursoComplementar/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        loading.dismiss();
        this.noticia.url = snapshot.downloadURL;
        this.noticia.status = 'SUCESSO';
        this.noticia.timestamp = firebase.database.ServerValue.TIMESTAMP;
      });
    }
  }

  getAllNoticias() {
    firebase.database().ref('cursoComplementar').on('value', requests => {
      let tmp = [];
      requests.forEach(request => {
        tmp.push({ key: request.key, ...request.val() });
        return false;
      });
      this.noticias = tmp;
    })
  }

  displayToast(message) {
    this.toastCtrl.create({ duration: 2000, message }).present();
  }

  delete(id){
    firebase.database().ref('cursoComplementar/'+id).remove();
  }

  incluir(key){
    this.modalCtrl.create(IncluirAulaCursoComplementarPage, {key}).present();
  }
}