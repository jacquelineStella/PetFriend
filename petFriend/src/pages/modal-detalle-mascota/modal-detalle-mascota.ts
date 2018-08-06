import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DbProvider } from '../../providers/db/db';
declare var google: any; 
/**
 * Generated class for the ModalDetalleMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-detalle-mascota',
  templateUrl: 'modal-detalle-mascota.html',
})
export class ModalDetalleMascotaPage {
  id:'';
  mascota: any;
  nombre: '';
  descripcion: '';
  foto: any;
  coords:any;
  address:any; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    private viewCtrl: ViewController,   
    private db: DbProvider ) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetalleMascotaPage');
    console.log(this.mascota);
  }

  ionViewDidEnter(){
 
  }

   cerrarModal(){
     this.viewCtrl.dismiss();
   }
   
  Publicar(){
    let perdida = {
     id : this.mascota.id,
     nombre: this.mascota.nombre,
     description: this.mascota.descripcion,
     foto: this.mascota.foto,    
     address: this.address 
   }
   this.db.publicar(perdida).then(res=>{
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





