import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';


/**
 * Generated class for the EncontradosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encontrados',
  templateUrl: 'encontrados.html',
})
export class EncontradosPage {
  mascota: any;
  nombre: string;
  descripcion: string;
  foto: any= '';
  coords : any = { lat: 0, lng: 0 };
  address:any;
  temparrCat: any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    private db :DbProvider,
    public  platform: Platform,
    private geolocation: Geolocation,) {
      platform.ready().then(() => {
        // La plataforma esta lista y ya tenemos acceso a los plugins.
          this.obtenerPosicion();

       });
       this.db.getEncontradas().then(res => {
        this.temparrCat = res;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncontradosPage');
  }
  nuevaMascota(){
    // aquí vamos a abrir el modal para añadir nueva mascota.
     let mimodal = this.modalCtrl.create( 'ModalEncontradaPage',this.coords );
     mimodal.present();
  }


   //coordenadas localizacion del usuario
   obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }

}
