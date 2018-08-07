import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DbProvider } from '../../providers/db/db';
declare var google: any; 
/**
 * Generated class for the ModalAdopcionTemporalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-adopcion-temporal',
  templateUrl: 'modal-adopcion-temporal.html',
})
export class ModalAdopcionTemporalPage {
  id:'';
  mascota: any;
  nombre: '';
  descripcion: '';
  foto: any;
  coords:any;
  address:any;
  contactoNombre:any;
  telefono:any; 
  p: any;
 

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public modalCtrl : ModalController,
     private viewCtrl: ViewController,
     private camera: Camera,
     private db: DbProvider
    ) {
       //parametros de MascotaPage
       this.mascota= this.navParams.get('mascota');
       this.coords=this.navParams.get('coords');
       //Se convierte a direccion las coordenadas
       this.getAddress(this.coords).then(results=> {
         this.address = results[0]['formatted_address'];
       }, errStatus => {
           // Aquí iría el código para manejar el error
       });
  }
  ionViewDidEnter(){   
    
   
  }

  ionViewDidLoad() {
    this.db.getPerfil().subscribe(perfil=>{
      this.p = perfil;
      console.log(this.p);
      this.contactoNombre=this.p[0]['nombre'];
      this.telefono=this.p[0]['telefono'];
      console.log(this.p)
      console.log(this.contactoNombre)
         })

    console.log('ionViewDidLoad ModalAdopcionTemporalPage');
  }
  cerrarModal(){
    this.viewCtrl.dismiss();
  }
  
  AdopcionTemporal(){
   let adopciont = {
    id : this.mascota.id,
    nombre: this.mascota.nombre,
    description: this.mascota.descripcion,
    foto: this.mascota.foto,    
    address: this.address,
    contactoNombre: this.contactoNombre,
    telefono: this.telefono
   
    
  }
  this.db.AdopcionTemporal(adopciont).then(res=>{
      console.log('Sitio modificado en firebase');
      this.cerrarModal();
  })
 }
 getAddress(coords):any {
   var geocoder = new google.maps.Geocoder();

   return new Promise(function(resolve, reject) {
       geocoder.geocode({'location': coords} , function (results, status) { // llamado asincronamente
           if (status == google.maps.GeocoderStatus.OK) {
               resolve(results);
           } else {
               reject(status);
           }
       });
   });
}

}
