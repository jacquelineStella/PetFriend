import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import {AdopcionesPage} from '../adopciones/adopciones';
import {EncontradosPage} from '../encontrados/encontrados'
import {MapaPage} from '../mapa/mapa';
import { AlimentoPage} from '../alimento/alimento';
import { PetPage} from '../pet/pet';
import { PeluqueriaPage} from '../peluqueria/peluqueria';

import { Platform } from 'ionic-angular';

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
 
  
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public auth : AuthProvider,
     public menuCtrl: MenuController ,
     public  platform: Platform
    
    ) {
     this.menuCtrl.enable(true); 
    
     
  }


  irPublicaciones(){
    this.navCtrl.push(PublicacionesPage);
  }

  irAdopciones(){
    this.navCtrl.push(AdopcionesPage);
  }
  irEncontrados(){
    this.navCtrl.push(EncontradosPage);
  }

  irMapa(){
    this.navCtrl.push(MapaPage);
  }
  irPet(){
    this.navCtrl.push(PetPage);
  }
  irAlimentos(){
    this.navCtrl.push(AlimentoPage);
  }
  irPeluqueria(){
    this.navCtrl.push(PeluqueriaPage);
  }
}



 



