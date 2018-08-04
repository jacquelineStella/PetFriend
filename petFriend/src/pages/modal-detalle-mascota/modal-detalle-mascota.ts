import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DbProvider } from '../../providers/db/db';
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
  //perdida= { id: this.mascota.id, nombre : this.mascota.nombre, descripcion : this.mascota.descripcion, foto : this.mascota.foto,};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    private viewCtrl: ViewController,
    private camera: Camera,
    private db: DbProvider ) {
      this.mascota=this.navParams.data;
     // this.nombre= this.navParams.get('nombre');
      // this.descripcion=this.navParams.get('descripcion');
      
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
   }
   this.db.publicar(perdida).then(res=>{
       console.log('Sitio modificado en firebase');
       this.cerrarModal();
   })
  }
}





