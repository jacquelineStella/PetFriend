import { Component,ViewChild} from '@angular/core';

import { Platform,NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { PerfilPage} from '../pages/perfil/perfil';
import { MascotaPage} from '../pages/mascota/mascota';
import { HistorialPage} from '../pages/historial/historial';
import { Events} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  templateUrl: 'app.html',
 
})

export class MyApp {
  @ViewChild('content') nav: NavController
 rootPage:any;

  
  constructor(platform: Platform,
     statusBar: StatusBar, 
     splashScreen: SplashScreen,
      private auth : AuthProvider,
      private events: Events,
      private geolocation: Geolocation) {
      

    platform.ready().then(() => {
      //Si el usuario tiene seccion activa, direcciona a la pagina principal
      this.auth.Session.subscribe(session => {
        if(session){
        this.rootPage = PrincipalPage;
        }
        else{
        this.rootPage = HomePage;
        }
        });
     
      });
      statusBar.styleDefault();
      splashScreen.hide();
    
  }
//navegacion de paginas del menu
irPerfil(){
  this.nav.push(PerfilPage);
}
 irMascota() {
  this.nav.push(MascotaPage);
 }
 irHistorial() {
  this.nav.push(HistorialPage);
 }



}

