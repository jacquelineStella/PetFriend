import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { PrincipalPage } from '../pages/principal/principal';
import { RegistroPage } from '../pages/registro/registro';
import { PerfilPage } from '../pages/perfil/perfil';
import { MascotaPage } from '../pages/mascota/mascota';
import { PublicacionesPage} from '../pages/publicaciones/publicaciones'
import {AdopcionesPage} from '../pages/adopciones/adopciones';
import {MapaPage} from '../pages/mapa/mapa';
import { HistorialPage } from '../pages/historial/historial';
import { EncontradosPage} from '../pages/encontrados/encontrados';
import { DbProvider } from '../providers/db/db';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpModule } from '@angular/http';
export const firebaseConfig = {
    apiKey: "AIzaSyA9WzCU0rc3rpx0Cwr_XMAGSJhGXvzGwlQ",
    authDomain: "petfriend-2018.firebaseapp.com",
    databaseURL: "https://petfriend-2018.firebaseio.com",
    projectId: "petfriend-2018",
    storageBucket: "petfriend-2018.appspot.com",
    messagingSenderId: "602679075615"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegistroPage,
    PerfilPage,
    MascotaPage,
    HistorialPage,
    PublicacionesPage,
    AdopcionesPage,
   MapaPage,
   EncontradosPage
  ],
  imports: [
    BrowserModule,    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegistroPage,
    PerfilPage,
    MascotaPage,
    HistorialPage,
    PublicacionesPage,
    AdopcionesPage,
    EncontradosPage,
    MapaPage
      
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DbProvider,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps
  ]
})
export class AppModule {}
