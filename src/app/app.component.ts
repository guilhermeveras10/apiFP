import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NoticiasPage } from '../pages/noticias/noticias';
import { TorcedoresPage } from '../pages/torcedores/torcedores';
import * as firebase from 'firebase';
import { ModulosPage } from '../pages/modulos/modulos';
import { AulasPage } from '../pages/aulas/aulas';
import { CursoComplementarPage } from '../pages/curso-complementar/curso-complementar';
import { AulasCursoComplementarPage } from '../pages/aulas-curso-complementar/aulas-curso-complementar';
import { InserirUsuarioPage } from '../pages/inserir-usuario/inserir-usuario';
import { GruposPage } from '../pages/grupos/grupos';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { FichaFinanceiraPage } from '../pages/ficha-financeira/ficha-financeira';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { NotasPage } from '../pages/notas/notas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NoticiasPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Usuários', component: TorcedoresPage },
      { title: 'Curso principal', component: NoticiasPage },
      { title: 'Módulos curso principal', component: ModulosPage },
      { title: 'Aulas curso principal', component: AulasPage },
      { title: 'Curso complementar', component: CursoComplementarPage },
      { title: 'Aula curso complementar', component: AulasCursoComplementarPage },
      { title: 'Inserir usuário', component: InserirUsuarioPage },
      { title: 'Grupos', component: GruposPage },
      { title: 'Notificações', component: NotificacoesPage },
      { title: 'Ficha financeira', component: FichaFinanceiraPage },
      { title: 'Ajuda', component: AjudaPage },
      { title: 'Notas', component: NotasPage }
    ];
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyBrtAgU0fHKzwi99jFC0ETM_GRgnTwxoY4",
      authDomain: "dbfp-da58f.firebaseapp.com",
      databaseURL: "https://dbfp-da58f.firebaseio.com",
      projectId: "dbfp-da58f",
      storageBucket: "dbfp-da58f.appspot.com",
      messagingSenderId: "347251983378"
    });
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
