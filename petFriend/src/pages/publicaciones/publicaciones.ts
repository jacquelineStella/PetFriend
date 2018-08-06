import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the PublicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
mascota: any;
mascotas: any;
nombre: string;
descripcion: string;
foto: any= '';
coords : any = { lat: 0, lng: 0 };
address:any;
temparrCat: any;
contactoNombre:any;
telefono:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,    
    private db :DbProvider,
    public  platform: Platform,
    ) {
      this.db.getPerdidasTodas().then(res => {
      this.temparrCat = res;
    })
    console.log(this.temparrCat);
    //   this.db.getPerdidasTodas().then(res => {
    //     this.temparrCat = res;
    // })
    }
        
    ionViewDidEnter(){    
      
    
    }    
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionesPage');
   
  }

  


}
