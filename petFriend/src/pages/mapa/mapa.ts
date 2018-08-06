import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps'
import { Geolocation } from '@ionic-native/geolocation';
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
  coords : any = { lat: 0, lng: 0 };
  map: GoogleMap;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public platform: Platform,
     private geolocation: Geolocation) {
       this.obtenerPosicion();
  
  }
  ngAfterViewInit() {
    this.platform.ready().then(() => {
      
      this.loadMap(this.coords);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

   //coordenadas localizacion del usuario
   obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }

  loadMap(locacion){
 
    let location = locacion;

    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {        
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        console.log('Map is ready!');
    });

}
}


