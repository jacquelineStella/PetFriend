import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
/**
 * Generated class for the PublicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
  mascota:any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private db : DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionesPage');
    
  }
  

}
