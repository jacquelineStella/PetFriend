import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

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
  permanente:any;
  temporal:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private db :DbProvider,
    public alertCtrl : AlertController,
    public database: AngularFireDatabase) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
    console.log(this.mascota);
  }
  //PUBLICACIONES DEL USUARIO
  ionViewDidEnter(){ 
    
    this.db.getPerdidas().subscribe(mascota=>{
      this.mascota = mascota;    
    })

    this.db.getAdopcionP().subscribe(mascota=>{
      this.mascota = this.permanente;    
    })

    this.db.getAdopciont().subscribe(mascota=>{
      this.mascota = this.temporal;    
    })
  }
  //BORRAR MASCOTAS QUE EL USUARIO TIENE PUBLICADAS 
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
