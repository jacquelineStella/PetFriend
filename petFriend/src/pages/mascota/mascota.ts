import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the MascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mascota',
  templateUrl: 'mascota.html',
})
export class MascotaPage {
mascota: any;
coords : any = { lat: 0, lng: 0 }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    private db :DbProvider,
    public  platform: Platform,
    private geolocation: Geolocation) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotaPage');
  }

  ionViewDidEnter(){   
    this.db.getMascota().subscribe(mascota=>{
      this.mascota = mascota;
    })
  }
  nuevaMascota(){
    // aquí vamos a abrir el modal para añadir nueva mascota.
     let mimodal = this.modalCtrl.create( 'ModalNuevaMascotaPage',this.coords );
     mimodal.present();
  }


 
 
}
