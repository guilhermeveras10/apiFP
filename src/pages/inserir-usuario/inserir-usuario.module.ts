import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InserirUsuarioPage } from './inserir-usuario';

@NgModule({
  declarations: [
    InserirUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(InserirUsuarioPage),
  ],
})
export class InserirUsuarioPageModule {}
