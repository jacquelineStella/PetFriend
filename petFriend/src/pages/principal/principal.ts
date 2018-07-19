import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth : AuthProvider, public menuCtrl: MenuController ) {
    this.menuCtrl.enable(true); 
  }



 


}
