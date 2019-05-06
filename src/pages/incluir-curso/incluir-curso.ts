import { Component } from '@angular/core';
import { ViewController , ModalController , NavController, NavParams, LoadingController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the IncluirCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incluir-curso',
  templateUrl: 'incluir-curso.html',
})
export class IncluirCursoPage {

  torcedor: any = {};
  torcedorKey: any;
  noticia: any = {};
  
  constructor(public viewCtrl: ViewController, public nav: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.torcedorKey = navParams.get('key');
  }
  
  ionViewDidLoad() {
    this.getTorcedorInfo();
  }
  getTorcedorInfo(){
    firebase.database().ref('cursoPrincipal/'+this.torcedorKey).on('value', snapshot => {
      this.torcedor = snapshot.val();
    })
  }

  save() {
    this.upload();
    firebase.database().ref('modulos/').push().update(this.noticia).then(data => {
      this.displayToast("Upado com sucesso")
    });
  }

  chooseFile() { document.getElementById('imgModulo').click(); }

  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    let loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
    loading.present();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('imgModulo')).files[0]]) {
      let path = '/modulos/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        loading.dismiss();
        this.noticia.url = snapshot.downloadURL;
        this.noticia.status = 'SUCESSO';
        this.noticia.timestamp = firebase.database.ServerValue.TIMESTAMP;
        this.noticia.id_do_curso = this.torcedorKey;
      });
    }
  }

  displayToast(message) {
    this.toastCtrl.create({ duration: 2000, message }).present();
  }
  close(){
    this.viewCtrl.dismiss();
  }
}