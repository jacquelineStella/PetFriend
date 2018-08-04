import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  mascota:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private db :DbProvider,
    public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
    console.log(this.mascota);
  }
  ionViewDidEnter(){   
    this.db.getPerdidas().subscribe(mascota=>{
      this.mascota = mascota;
    })
  }

  borrarMascota(id){

    let alert = this.alertCtrl.create({
      title: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar esta publicacion?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Ha respondido que no así que no hacemos nada
          }
        },
        {
          text: 'Si',
          handler: () => {
               // AquÍ borramos el sitio en la base de datos
               this.db.borrarPerdida(id);
           }
        }
      ]
    });

    alert.present();

 }

}
