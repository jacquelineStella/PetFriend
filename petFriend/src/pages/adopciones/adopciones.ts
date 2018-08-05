import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the AdopcionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adopciones',
  templateUrl: 'adopciones.html',
})
export class AdopcionesPage {
  mascota1: any;
  mascota2: any;
  nombre: string;
  descripcion: string;
  foto: any= '';
  address:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private db :DbProvider,
     public  platform: Platform,) {
  }
  ionViewDidEnter(){   
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdopcionesPage');
    this.db.getPermanente().subscribe(mascota=>{
      this.mascota1= mascota;
    })
      this.db.getTemporal().subscribe(mascota=>{
        this.mascota2= mascota;
    
    })
  }

}
