import { Component } from '@angular/core';
import { ModalController , NavController, NavParams, LoadingController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
/**
 * Generated class for the InserirUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserir-usuario',
  templateUrl: 'inserir-usuario.html',
})
export class InserirUsuarioPage {

  user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  getUserData() { // get current user data from firebase
    this.user.uid = firebase.auth().currentUser;
  }
  chooseFile() { document.getElementById('imgUser').click(); }
  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    let loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
    loading.present();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('imgUser')).files[0]]) {
      let path = '/fotoDoAluno/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        loading.dismiss();
        this.user.foto = snapshot.downloadURL;
      });
    }
  }
  registro() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.senha).then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: this.user.displayName,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
        }).then(() => {
          this.upload();
          firebase.database().ref('usuarios/'+firebase.auth().currentUser.uid).set({
            uid: firebase.auth().currentUser.uid,
            foto: this.user.foto,
            email: this.user.email,
            password: this.user.senha,
            nome: this.user.nome,
            professor_ou_aluno: this.user.professor_ou_aluno,
            tipo_de_usuario: this.user.tipo_de_usuario
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
  }
}
