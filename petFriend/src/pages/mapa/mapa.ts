import { Component , NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { LoadingController } from 'ionic-angular';
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
  map: any;
  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  loading: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public  platform: Platform,     
     public zone: NgZone,
     public geolocation: Geolocation,
     public loadingCtrl: LoadingController) {
  
  
      this.geocoder = new google.maps.Geocoder;
      let elem = document.createElement("div")
      this.GooglePlaces = new google.maps.places.PlacesService(elem);
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = {
        input: ''
      };
      this.autocompleteItems = [];
      this.markers = [];
      this.loading = this.loadingCtrl.create();
    }
  
    ionViewDidEnter(){
        // let infoWindow = new google.maps.InfoWindow({map: map});
        //Set latitude and longitude of some place
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.9011, lng: -56.1645},
        zoom: 15
      });
    }
  
    tryGeolocation(){
      this.loading.present();
      this.clearMarkers();//remove previous markers
      this.geolocation.getCurrentPosition().then((resp) => {
        let pos = {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        };
        let marker = new google.maps.Marker({
          position: pos,
          map: this.map,
          title: 'I am here!'
        });
        this.markers.push(marker);
        this.map.setCenter(pos);
        this.loading.dismiss();
  
      }).catch((error) => {
        console.log('Error getting location', error);
        this.loading.dismiss();
      });
    }
  
    updateSearchResults(){
      if (this.autocomplete.input == '') {
        this.autocompleteItems = [];
        return;
      }
      this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
        (predictions, status) => {
          this.autocompleteItems = [];
          if(predictions){
            this.zone.run(() => {
              predictions.forEach((prediction) => {
                this.autocompleteItems.push(prediction);
              });
            });
          }
      });
    }
  
    selectSearchResult(item){
      this.clearMarkers();
      this.autocompleteItems = [];
  
      this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
        if(status === 'OK' && results[0]){
          // let position = {
          //     lat: results[0].geometry.location.lat,
          //     lng: results[0].geometry.location.lng
          // };
          let marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: this.map
          });
          this.markers.push(marker);
          this.map.setCenter(results[0].geometry.location);
        }
      })
    }
  
    clearMarkers(){
      for (var i = 0; i < this.markers.length; i++) {
        console.log(this.markers[i])
        this.markers[i].setMap(null);
      }
      this.markers = [];
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }
}

  // map:any; //Manejador Mapa
  // coords: any={lat:0, lng:0} //coordenadas

  //      //obtener posicion del usuario
  //    platform.ready().then(()=>{
  //     this.obtenerPosicion();
   
  //  });
  // loadMap(){
  //   let mapContainer=document.getElementById('map');
  //     this.map=new google.maps.Map(mapContainer,{
  //       center: this.coords
  //       ,zoom: 12
  //     });
  //     this.marcador(this.map, this.coords );
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

  
  // referencia(map,posicion){
  //     let referencia= new google.maps.referencia({
  //       location: posicion,
  //       map:this.map,
  //       radius:2000,
  //       types:['veterinaria']
  //     });

  // }

  // marcador( map, position){
  //   let miMarker = new google.maps.Marker({
  //     icon : 'assets/imgs/ico_estoy_aqui.png',
  //     map: map,
  //     position: position
  //   });
  // }


  // obtenerPosicion(): any{
  //   let locationOptions = { timeout: 30000, enableHighAccuracy: true };
  //   this.geolocation.getCurrentPosition(locationOptions).then(res=>{
  //     this.coords.lat= res.coords.latitude;
  //     this.coords.lng=res.coords.longitude;
  //     this.loadMap();
  //   })
  //   .catch(

  //     (error)=>{
       
  //       console.log(error);        
  //     }
  //     );
    

  //   }


//}
