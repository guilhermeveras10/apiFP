import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
import { IncluirAulaPage } from '../incluir-aula/incluir-aula';

/**
 * Generated class for the ModulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modulos',
  templateUrl: 'modulos.html',
})
export class ModulosPage {
  
  torcedores: any = [];
  constructor(public nav: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawRequestsPage');
    this.getAllTorcedores();
  }

  getAllTorcedores() {
    firebase.database().ref('modulos_curso_principal_view_api').on('value', requests => {
      let tmp = [];
      requests.forEach(request => {
        tmp.push({ key: request.key, ...request.val() });
        return false;
      });
      this.torcedores = tmp;
    })
  }
  delete(id, curso){
    firebase.database().ref('modulos_curso_principal/' + curso + '/' +id).remove();
    firebase.database().ref('modulos_curso_principal_view_api/'+id).remove();
  }

  incluir(key){
    this.modalCtrl.create(IncluirAulaPage, {key}).present();
  }
}
