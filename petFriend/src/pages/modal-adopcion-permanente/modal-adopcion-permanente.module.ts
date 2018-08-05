import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAdopcionPermanentePage } from './modal-adopcion-permanente';

@NgModule({
  declarations: [
    ModalAdopcionPermanentePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAdopcionPermanentePage),
  ],
})
export class ModalAdopcionPermanentePageModule {}
