import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController} from 'ionic-angular';

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
  mascota: any;
  nombre: string;
descripcion: string;
foto: any= '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    private viewCtrl: ViewController) {
      this.mascota=this.navParams.data;
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetalleMascotaPage');
    console.log(this.mascota);
  }
   cerrarModal(){
     this.viewCtrl.dismiss();
   }
}
