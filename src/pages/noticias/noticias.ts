import { Component } from '@angular/core';
import { ModalController , NavController, NavParams, LoadingController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
import { IncluirCursoPage } from '../incluir-curso/incluir-curso';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

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
    this.upload2();
    firebase.database().ref('curso_principal/' + this.noticia.id).update(this.noticia).then(data => {
      firebase.database().ref('search_cursos/' + this.noticia.id).update(this.noticia).then(data => {
        firebase.database().ref('tudo_para_search/' + this.noticia.id).update(this.noticia).then(data => {
          firebase.database().ref('notificacoes/' + this.noticia.id).update(this.noticia).then(data => {
            this.displayToast("Upado com sucesso")
          });
        });
      });
    });
  }

  chooseFile() { document.getElementById('imgNoticia').click(); }
  chooseFile2() { document.getElementById('imgNoticia2').click(); }

  upload2() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    let loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
    loading.present();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('imgNoticia2')).files[0]]) {
      let path = '/cursoPrincipal/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        loading.dismiss();
        this.noticia.url2 = snapshot.downloadURL;
      });
    }
  }
  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    let loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
    loading.present();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('imgNoticia')).files[0]]) {
      let path = '/cursoPrincipal/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        loading.dismiss();
        this.noticia.url = snapshot.downloadURL;
        this.noticia.status = 'SUCESSO';
        this.noticia.timestamp = firebase.database.ServerValue.TIMESTAMP;
        this.noticia.qual_papel = 'curso_principal';
      });
    }
  }

  getAllNoticias() {
    firebase.database().ref('curso_principal').on('value', requests => {
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
    firebase.database().ref('curso_principal/'+id).remove();
    firebase.database().ref('search_cursos/'+id).remove();
    firebase.database().ref('tudo_para_search/' + id).remove();
  }

  incluir(key){
    this.modalCtrl.create(IncluirCursoPage, {key}).present();
  }
}
