import { Component } from '@angular/core';
import { ViewController, ModalController, NavController, NavParams, LoadingController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the IncluirAulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incluir-aula',
  templateUrl: 'incluir-aula.html',
})
export class IncluirAulaPage {

  torcedor: any = {};
  torcedorKey: any;
  noticia: any = {};

  constructor(public viewCtrl: ViewController, public nav: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.torcedorKey = navParams.get('key');
  }

  ionViewDidLoad() {
    this.getTorcedorInfo();
  }
  getTorcedorInfo() {
    firebase.database().ref('modulos_curso_principal_view_api/' + this.torcedorKey).on('value', snapshot => {
      this.torcedor = snapshot.val();
    })
  }
  chooseFile() { document.getElementById('imgAula').click(); }

  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    let loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
    loading.present();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('imgAula')).files[0]]) {
      let path = '/aulascomplementar/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        loading.dismiss();
        this.noticia.url = snapshot.downloadURL;
      });
    }
  }

  save() {
    this.upload();
    this.noticia.status = 'SUCESSO';
    this.noticia.timestamp = firebase.database.ServerValue.TIMESTAMP;
    this.noticia.id_do_modulo = this.torcedorKey;
    this.noticia.etapa = this.torcedor.etapa;
    this.noticia.id = this.noticia.aula;
    firebase.database().ref('aulas_curso_principal/' + this.torcedor.etapa + '/' + this.noticia.aula).update(this.noticia).then(data => {
      firebase.database().ref('aulas_curso_principal_premium_api/' + this.noticia.aula).update(this.noticia).then(data => {
        firebase.database().ref('notificacoes/' + this.noticia.aula).update(this.noticia).then(data => {
          this.displayToast("Upado com sucesso")
        });
      });
    });
  }

  displayToast(message) {
    this.toastCtrl.create({ duration: 2000, message }).present();
  }
  close() {
    this.viewCtrl.dismiss();
  }
}