import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetalleMascotaPage } from './modal-detalle-mascota';

@NgModule({
  declarations: [
    ModalDetalleMascotaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetalleMascotaPage),
  ],
})
export class ModalDetalleMascotaPageModule {}
