import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncontradosPage } from './encontrados';

@NgModule({
  declarations: [
    EncontradosPage,
  ],
  imports: [
    IonicPageModule.forChild(EncontradosPage),
  ],
})
export class EncontradosPageModule {}
