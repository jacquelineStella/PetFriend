import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
declare var google: any; 
/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map:any; //Manejador Mapa
  coords: any={lat:0, lng:0} //coordenadas

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public  platform: Platform,
     private geolocation: Geolocation,
     private db :DbProvider,) {
       //obtener posicion del usuario
     platform.ready().then(()=>{
      this.obtenerPosicion();
   
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }
  loadMap(){
    let mapContainer=document.getElementById('map');
      this.map=new google.maps.Map(mapContainer,{
        center: this.coords
        ,zoom: 12
      });
      this.marcador(this.map, this.coords );
      //This.referencia(this.map,this.coords )
      
    
             // Colocamos el marcador
  //   let miMarker = new google.maps.Marker({
  //     icon : 'assets/imgs/ico_estoy_aqui.png',
  //     map: this.map,
  //     position: this.coords
  // });
  // let request = {
  //   location: myLatlng,
  //   radius: 5000,
  //   types: ['cafe']
  // };

  }
  // referencia(map,posicion){
  //     let referencia= new google.maps.referencia({
  //       location: posicion,
  //       map:this.map,
  //       radius:2000,
  //       types:['veterinaria']
  //     });

  // }

  marcador( map, position){
    let miMarker = new google.maps.Marker({
      icon : 'assets/imgs/ico_estoy_aqui.png',
      map: map,
      position: position
    });
  }


  obtenerPosicion(): any{
    let locationOptions = { timeout: 30000, enableHighAccuracy: true };
    this.geolocation.getCurrentPosition(locationOptions).then(res=>{
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
