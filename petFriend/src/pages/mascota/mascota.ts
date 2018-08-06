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
nombre: string;
descripcion: string;
foto: any= '';
coords : any = { lat: 0, lng: 0 };
address:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    private db :DbProvider,
    public  platform: Platform,
    private geolocation: Geolocation,
   ) {   
       

      platform.ready().then(() => {
        // La plataforma esta lista y ya tenemos acceso a los plugins.
          this.obtenerPosicion();

       });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotaPage');
    console.log(this.mascota);
   
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
//Apertur de paginas "Modal"
mostrarMascota(mascota){
  let modalDetalle= this.modalCtrl.create('ModalDetalleMascotaPage',{mascota:  mascota, coords: this.coords});
  modalDetalle.present();
}

mostrarMascotaPermanente(mascota){
  let modalPermanente= this.modalCtrl.create('ModalAdopcionPermanentePage',{mascota:  mascota, coords: this.coords});
  modalPermanente.present();
}

mostrarMascotaTemporal(mascota){
  let modalTemporal= this.modalCtrl.create('ModalAdopcionTemporalPage',{mascota:  mascota, coords: this.coords});
  modalTemporal.present();
}
 
}



  




