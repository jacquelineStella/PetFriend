import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DbProvider } from '../../providers/db/db';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
declare var google: any; 
/**
 * Generated class for the ModalEncontradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-encontrada',
  templateUrl: 'modal-encontrada.html',
})
export class ModalEncontradaPage {
  nombre: string;
  descripcion: string;
  foto: any= '';
  coords: any={lat:0, lng:0} //coordenadas
  address: string;
  contactoNombre:any;
  telefono:any;
  p: any;
 


  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    private viewCtrl : ViewController,
    private camera: Camera,
    private db :DbProvider,
    public  platform: Platform,
    public geolocation: Geolocation ) {
  }

  ionViewDidLoad() {
   this.coords.lat= this.navParams.get('lat');
   this.coords.lng= this.navParams.get('lng');
   this.getAddress(this.coords).then(results=> {
    this.address = results[0]['formatted_address'];
  }, errStatus => {
      // Aquí iría el código para manejar el error
  });
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  sacarFoto(){

    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }

 
    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.foto = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
  ionViewDidEnter(){   
    this.db.getPerfil().subscribe(perfil=>{
      this.p = perfil;
      console.log(this.p);
      this.contactoNombre=this.p[0];
      this.telefono=this.p[1];
      console.log(this.contactoNombre)
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

guardarMascotaEncontrada(){      
  let mascota = {        
    nombre: this.nombre,
    descripcion: this.descripcion,
    foto: this.foto,
    address: this.address ,
    contactoNombre: this.contactoNombre,
    telefono: this.telefono
         
    
  }

this.db.guardarMascotaEncontrada(mascota).then(res=>{
      console.log('mascota guardado en firebase:');
      this.cerrarModal();
  })
 }

}
