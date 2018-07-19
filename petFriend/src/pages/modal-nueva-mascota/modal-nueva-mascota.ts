import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DbProvider } from '../../providers/db/db';
/**
 * Generated class for the ModalNuevaMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-nueva-mascota',
  templateUrl: 'modal-nueva-mascota.html',
})
export class ModalNuevaMascotaPage {
nombre: string;
descripcion: string;
foto: any= '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController,private camera: Camera,private db :DbProvider, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevaMascotaPage');
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
    guardarMascota(){
      let mascota = {        
        nombre: this.nombre,
        descripcion: this.descripcion,
        foto: this.foto
      }
    
  this.db.guardarMascota(mascota).then(res=>{
          console.log('mascota guardado en firebase:');
          this.cerrarModal();
      })
     }
  }

