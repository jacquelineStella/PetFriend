import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    private db :DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotaPage');
  }

  ionViewDidEnter(){   
    this.db.getMascota().subscribe(mascota=>{
      this.mascota = mascota;
    })
  }
  nuevoSitio(){
    // aquí vamos a abrir el modal para añadir nuestro sitio.
     let mimodal = this.modalCtrl.create( 'ModalNuevaMascotaPage' );
     mimodal.present();
  }
}
