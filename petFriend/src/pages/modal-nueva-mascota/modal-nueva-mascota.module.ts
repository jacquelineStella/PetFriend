import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNuevaMascotaPage } from './modal-nueva-mascota';

@NgModule({
  declarations: [
    ModalNuevaMascotaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNuevaMascotaPage),
  ],
})
export class ModalNuevaMascotaPageModule {}
