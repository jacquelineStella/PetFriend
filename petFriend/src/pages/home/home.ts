import { Component } from '@angular/core';
import {  NavController, AlertController,MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PrincipalPage } from '../principal/principal';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user= { email : '', password : ''};
  constructor(public navCtrl: NavController,public auth : AuthProvider,public alertCtrl : AlertController,public menuCtrl: MenuController ) {
    this.menuCtrl.enable(false); 
  }


  login()
{
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      this.irPrincipal();
      }
    )
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

  irRegistro(){
    this.navCtrl.push(RegistroPage);
  }


}
