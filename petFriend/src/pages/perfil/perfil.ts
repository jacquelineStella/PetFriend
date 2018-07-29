import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  perfil: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider,private db: DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    
  }

  // ionViewDidEnter(){
   
  //   this.db.getPerfil().subscribe(perfil=>{
  //     this.perfil = perfil;
  //   })

}


