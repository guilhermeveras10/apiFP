import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IncluirCursoPage } from '../pages/incluir-curso/incluir-curso';
import { TorcedoresPage } from '../pages/torcedores/torcedores';
import { NoticiasPage } from '../pages/noticias/noticias';
import { ArtilheirosPage } from '../pages/artilheiros/artilheiros';
import { EnquetesPage } from '../pages/enquetes/enquetes';
import { JogadoresPage } from '../pages/jogadores/jogadores';
import { JogosPage } from '../pages/jogos/jogos';
import { ProdutosLojaPage } from '../pages/produtos-loja/produtos-loja';
import { ProdutosPontosPage } from '../pages/produtos-pontos/produtos-pontos';
import { SorteiosPage } from '../pages/sorteios/sorteios';
import { VideosPage } from '../pages/videos/videos';
import { TimesPage } from '../pages/times/times';
import { TorcedoresInfoPage } from '../pages/torcedores-info/torcedores-info';

import { IncluirAulaPage } from '../pages/incluir-aula/incluir-aula';
import { ModulosPage } from '../pages/modulos/modulos';

@NgModule({
  declarations: [
    MyApp,
    TorcedoresInfoPage,
    IncluirCursoPage,
    ModulosPage,
    TorcedoresPage,
    IncluirAulaPage,
    NoticiasPage,
    ArtilheirosPage,
    SorteiosPage,
    TimesPage,
    VideosPage,
    EnquetesPage,
    JogadoresPage,
    JogosPage,
    ProdutosLojaPage,
    ProdutosPontosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TorcedoresInfoPage,
    TorcedoresPage,
    IncluirCursoPage,
    IncluirAulaPage,
    ModulosPage,
    NoticiasPage,
    ArtilheirosPage,
    SorteiosPage,
    TimesPage,
    VideosPage,
    EnquetesPage,
    JogadoresPage,
    JogosPage,
    ProdutosLojaPage,
    ProdutosPontosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
