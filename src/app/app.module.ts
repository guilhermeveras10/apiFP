import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IncluirCursoPage } from '../pages/incluir-curso/incluir-curso';
import { TorcedoresPage } from '../pages/torcedores/torcedores';
import { NoticiasPage } from '../pages/noticias/noticias';
import { EnquetesPage } from '../pages/enquetes/enquetes';
import { JogadoresPage } from '../pages/jogadores/jogadores';
import { JogosPage } from '../pages/jogos/jogos';
import { ProdutosLojaPage } from '../pages/produtos-loja/produtos-loja';
import { ProdutosPontosPage } from '../pages/produtos-pontos/produtos-pontos';
import { SorteiosPage } from '../pages/sorteios/sorteios';
import { TorcedoresInfoPage } from '../pages/torcedores-info/torcedores-info';

import { IncluirAulaPage } from '../pages/incluir-aula/incluir-aula';
import { ModulosPage } from '../pages/modulos/modulos';
import { AulasPage } from '../pages/aulas/aulas';
import { CursoComplementarPage } from '../pages/curso-complementar/curso-complementar';
import { AulasCursoComplementarPage } from '../pages/aulas-curso-complementar/aulas-curso-complementar';
import { IncluirAulaCursoComplementarPage } from '../pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar';

@NgModule({
  declarations: [
    MyApp,
    AulasPage,
    AulasCursoComplementarPage,
    IncluirAulaCursoComplementarPage,
    CursoComplementarPage,
    TorcedoresInfoPage,
    IncluirCursoPage,
    ModulosPage,
    TorcedoresPage,
    IncluirAulaPage,
    NoticiasPage,
    SorteiosPage,
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
    AulasPage,
    AulasCursoComplementarPage,
    IncluirAulaCursoComplementarPage,
    CursoComplementarPage,
    TorcedoresInfoPage,
    TorcedoresPage,
    IncluirCursoPage,
    IncluirAulaPage,
    ModulosPage,
    NoticiasPage,
    SorteiosPage,
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
