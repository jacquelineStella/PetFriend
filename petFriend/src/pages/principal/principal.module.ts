import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { PrincipalPage } from './principal';

@NgModule({
  declarations: [
    PrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage),
  ],
})
export class PrincipalPageModule {

  constructor(public navCtrl: NavController){}
}
