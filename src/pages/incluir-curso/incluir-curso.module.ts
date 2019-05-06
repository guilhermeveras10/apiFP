import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncluirCursoPage } from './incluir-curso';

@NgModule({
  declarations: [
    IncluirCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(IncluirCursoPage),
  ],
})
export class IncluirCursoPageModule {}
