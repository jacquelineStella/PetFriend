// import { Component } from '@angular/core';
// import {  NavController, AlertController,MenuController } from 'ionic-angular';
// import { AuthProvider } from '../../providers/auth/auth';
import { PrincipalPage } from '../principal/principal';
import { RegistroPage } from '../registro/registro';
import { ReseteoPage } from '../reseteo/reseteo';
import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, Loading, AlertController,MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;
  user: Observable<firebase.User>;
  public loading:Loading;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user = afAuth.authState;
  }

  loginUser(){

    console.log("Email:" + this.myForm.value.email);
    console.log("Password:" + this.myForm.value.password);
   

    this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() => {
      console.log("User logging");
      this.navCtrl.push(PrincipalPage);
    }, (err) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
  

  goToSignup(){
    this.navCtrl.push(RegistroPage);
  }

  goToResetPassword(){
    this.navCtrl.push(ReseteoPage);
  }

}


  // user= { email : '', password : ''};
  // constructor(public navCtrl: NavController,public auth : AuthProvider,public alertCtrl : AlertController,public menuCtrl: MenuController ) {
  //   this.menuCtrl.enable(false); 
  // }


//   login()
// {
//     this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
//       this.irPrincipal();
//       }
//     )
//      .catch(err=>{
//       let alert = this.alertCtrl.create({
//         title: 'Error',
//         subTitle: err.message,
//         buttons: ['Aceptar']
//       });
//       alert.present();
//     })
//   }

//   irPrincipal(){
//     this.navCtrl.push(PrincipalPage);
//   }

//   irRegistro(){
//     this.navCtrl.push(RegistroPage);
//   }


// }
