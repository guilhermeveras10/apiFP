import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the AulasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aulas',
  templateUrl: 'aulas.html',
})
export class AulasPage {

  torcedores: any = [];
  constructor(public nav: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawRequestsPage');
    this.getAllTorcedores();
  }

  getAllTorcedores() {
    firebase.database().ref('aulasCursoPrincipalPremiumApi').on('value', requests => {
      let tmp = [];
      requests.forEach(request => {
        tmp.push({ key: request.key, ...request.val() });
        return false;
      });
      this.torcedores = tmp;
    })
  }

  delete(id){
    firebase.database().ref('aulasCursoPrincipal/'+id).remove();
    firebase.database().ref('aulasCursoPrincipalPremiumApi/'+id).remove();
  }
}
