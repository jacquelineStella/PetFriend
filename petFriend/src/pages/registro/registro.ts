import { Component } from '@angular/core';
import {  NavController, AlertController,IonicPage,NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PrincipalPage } from '../principal/principal';
import { HomePage } from '../home/home';
import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  
  user= { email : '', password : ''};
  perfil= { nombre : '', telefono : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth : AuthProvider,public alertCtrl : AlertController, private db: DbProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      this.guardarPerfil();
      this.irPrincipal();
      // El usuario se ha creado correctamente
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

  irPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }
  
  guardarPerfil(){
    let perfil = {
      nombre: this.perfil.nombre,
      telefono: this.perfil.telefono 
    }  
this.db.guardarPerfil(perfil).then(res=>{
        console.log('Sitio guardado en firebase:');
        
    })
   }

}
