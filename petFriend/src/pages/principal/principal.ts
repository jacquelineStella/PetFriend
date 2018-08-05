import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import {AdopcionesPage} from '../adopciones/adopciones';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
declare var google: any; 
/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  map:any; //Manejador Mapa
  coords: any={lat:0, lng:0} //coordenadas
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public auth : AuthProvider,
     public menuCtrl: MenuController ,
     public  platform: Platform,
     private geolocation: Geolocation,
     private db :DbProvider,
    ) {
     this.menuCtrl.enable(true); 
     //obtener posicion del usuario
     platform.ready().then(()=>{
        this.obtenerPosicion();
     });
     
  }


  irPublicaciones(){
    this.navCtrl.push(PublicacionesPage);
  }

  irAdopciones(){
    this.navCtrl.push(AdopcionesPage);
  }

  loadMap(){
    let mapContainer=document.getElementById('map');
      this.map=new google.maps.Map(mapContainer,{
        center: this.coords,zoom: 12
      });
             // Colocamos el marcador
    let miMarker = new google.maps.Marker({
      icon : 'assets/imgs/ico_estoy_aqui.png',
      map: this.map,
      position: this.coords
  });

  }

  obtenerPosicion(): any{
    this.geolocation.getCurrentPosition().then(res=>{
      this.coords.lat= res.coords.latitude;
      this.coords.lng=res.coords.longitude;
      this.loadMap();
    })
    .catch(

      (error)=>{
        console.log(error);        
      }
      );
    

    }



 


}
