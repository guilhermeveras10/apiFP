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
    firebase.database().ref('modulosCursoPrincipalViewApi/' + this.torcedorKey).on('value', snapshot => {
      this.torcedor = snapshot.val();
    })
  }

  save() {
    this.noticia.status = 'SUCESSO';
    this.noticia.timestamp = firebase.database.ServerValue.TIMESTAMP;
    this.noticia.id_do_modulo = this.torcedorKey;
    this.noticia.etapa = this.torcedor.etapa;
    firebase.database().ref('aulasCursoPrincipal/' + this.torcedor.etapa + '/' + this.noticia.aula).update(this.noticia).then(data => {
      firebase.database().ref('aulasCursoPrincipalPremiumApi/' + this.noticia.aula).update(this.noticia).then(data => {
        this.displayToast("Upado com sucesso")
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