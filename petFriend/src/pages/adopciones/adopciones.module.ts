import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdopcionesPage } from './adopciones';

@NgModule({
  declarations: [
    AdopcionesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdopcionesPage),
  ],
})
export class AdopcionesPageModule {}
