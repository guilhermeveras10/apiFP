import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the AulasCursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aulas-curso-complementar',
  templateUrl: 'aulas-curso-complementar.html',
})
export class AulasCursoComplementarPage {

  torcedores: any = [];
  constructor(public nav: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawRequestsPage');
    this.getAllTorcedores();
  }

  getAllTorcedores() {
    firebase.database().ref('aulaCursoComplementarApi').on('value', requests => {
      let tmp = [];
      requests.forEach(request => {
        tmp.push({ key: request.key, ...request.val() });
        return false;
      });
      this.torcedores = tmp;
    })
  }

  delete(id,titulo){
    firebase.database().ref('aulaCursoComplementarApi'+id+'/'+titulo)
    firebase.database().ref('aulasCursoComplementar/'+id).remove();
  }
}
