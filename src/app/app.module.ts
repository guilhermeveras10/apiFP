import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IncluirCursoPage } from '../pages/incluir-curso/incluir-curso';
import { TorcedoresPage } from '../pages/torcedores/torcedores';
import { NoticiasPage } from '../pages/noticias/noticias';
import { TorcedoresInfoPage } from '../pages/torcedores-info/torcedores-info';

import { IncluirAulaPage } from '../pages/incluir-aula/incluir-aula';
import { ModulosPage } from '../pages/modulos/modulos';
import { AulasPage } from '../pages/aulas/aulas';
import { CursoComplementarPage } from '../pages/curso-complementar/curso-complementar';
import { AulasCursoComplementarPage } from '../pages/aulas-curso-complementar/aulas-curso-complementar';
import { IncluirAulaCursoComplementarPage } from '../pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar';
import { InserirUsuarioPage } from '../pages/inserir-usuario/inserir-usuario';
import { GruposPage } from '../pages/grupos/grupos';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { FichaFinanceiraPage } from '../pages/ficha-financeira/ficha-financeira';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { NotasPage } from '../pages/notas/notas';

@NgModule({
  declarations: [
    MyApp,
    AulasPage,
    NotasPage,
    AjudaPage,
    NotificacoesPage,
    GruposPage,
    FichaFinanceiraPage,
    InserirUsuarioPage,
    AulasCursoComplementarPage,
    IncluirAulaCursoComplementarPage,
    CursoComplementarPage,
    TorcedoresInfoPage,
    IncluirCursoPage,
    ModulosPage,
    TorcedoresPage,
    IncluirAulaPage,
    NoticiasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InserirUsuarioPage,
    AulasPage,
    AulasCursoComplementarPage,
    IncluirAulaCursoComplementarPage,
    CursoComplementarPage,
    TorcedoresInfoPage,
    TorcedoresPage,
    IncluirCursoPage,
    IncluirAulaPage,
    NotasPage,
    AjudaPage,
    FichaFinanceiraPage,
    NotificacoesPage,
    GruposPage,
    ModulosPage,
    NoticiasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
