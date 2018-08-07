import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';


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
  perfil:any;
  id: '';
  telefono:' ';
  nombre:'';
  contactoNombre:any;  
  p: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private db :DbProvider) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
    console.log(this.perfil);
  }
  ionViewDidEnter(){   
    this.db.getPerfil().subscribe(perfil=>{
     this.p = perfil;
    
      // console.log(this.p);
      // this.contactoNombre=this.p[0];
      // this.telefono=this.p[1];
      // console.log(this.contactoNombre)
         })
        }

}

