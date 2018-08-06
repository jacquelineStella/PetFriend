
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  constructor(public afDB: AngularFireDatabase, public auth: AuthProvider) {
    console.log('Hello DbProvider Provider');
  }
 

  guardarPerfil(perfil){
    perfil.id  = Date.now();
    return this.afDB.database.ref('perfil/'+this.auth.getUser()+'/'+perfil.id).set(perfil)
 }
 
  getPerfil(){
    return this.afDB.list('perfil/'+this.auth.getUser()).valueChanges();
  }


  getPerfi(){
    return this.afDB.database.ref('Perfil'+this.auth.getUser()+'/').orderByChild('telefono')
  }
  guardarMascota(mascota){
    if(!mascota.id){
    mascota.id  = Date.now();
    }
    return this.afDB.database.ref('mascota/'+this.auth.getUser()+'/'+mascota.id).set(mascota)
 }

 guardarMascotaEncontrada(mascota){
  if(!mascota.id){
  mascota.id  = Date.now();
  }
  return this.afDB.database.ref('encontradas/'+this.auth.getUser()+'/'+mascota.id).set(mascota)
}

getMascota(){
  return this.afDB.list('mascota/'+this.auth.getUser()).valueChanges();
}
getPerdidas(){
  return this.afDB.list('perdida/'+this.auth.getUser()).valueChanges();
}

getAdopcionP(){
  return this.afDB.list('adopcionPermanente/'+this.auth.getUser()).valueChanges();
}

getAdopciont(){
  return this.afDB.list('adopcionTemporal/'+this.auth.getUser()).valueChanges();
}

publicar(perdida){ 
  if(!perdida.id){
    perdida.id  = Date.now();
    }
  
  return this.afDB.database.ref('perdida/'+this.auth.getUser()+'/'+perdida.id).set(perdida)
}

AdopcionPermanente(adopcion){ 
  if(!adopcion.id){
    adopcion.id  = Date.now();
    }  
  return this.afDB.database.ref('adopcionPermanente/'+this.auth.getUser()+'/'+adopcion.id).set(adopcion)
}

AdopcionTemporal(adopciont){ 
  if(!adopciont.id){
    adopciont.id  = Date.now();
    }  
  return this.afDB.database.ref('adopcionTemporal/'+this.auth.getUser()+'/'+adopciont.id).set(adopciont)
}

public borrarPerdida(id){
  this.afDB.database.ref('perdida/'+this.auth.getUser()+'/'+id).remove();

}




getPerdidasTodas()  {
  return new Promise((resolve, reject) => {
    this.afDB.database.ref('perdida').orderByChild('uid').once('value', snapshot => {
      let catData = snapshot.val();
      let temparr = [];
      for (var key in catData) {
        for (var key2 in catData[key]) {
          temparr.push(catData[key][key2])
        }
      }
      resolve(temparr);
    });
  })
}
getPermanentes()  {
  return new Promise((resolve, reject) => {
    this.afDB.database.ref('adopcionPermanente').orderByChild('uid').once('value', snapshot => {
      let catData = snapshot.val();
      let temparr = [];
      for (var key in catData) {
        for (var key2 in catData[key]) {
          temparr.push(catData[key][key2])
        }
      }
      resolve(temparr);
    });
  })
}

getTemporales()  {
  return new Promise((resolve, reject) => {
    this.afDB.database.ref('adopcionTemporal').orderByChild('uid').once('value', snapshot => {
      let catData = snapshot.val();
      let temparr = [];
      for (var key in catData) {
        for (var key2 in catData[key]) {
          temparr.push(catData[key][key2])
        }
      }
      resolve(temparr);
    });
  })
}

getEncontradas()  {
  return new Promise((resolve, reject) => {
    this.afDB.database.ref('encontradas').orderByChild('uid').once('value', snapshot => {
      let catData = snapshot.val();
      let temparr = [];
      for (var key in catData) {
        for (var key2 in catData[key]) {
          temparr.push(catData[key][key2])
        }
      }
      resolve(temparr);
    });
  })
}


getPerfilSolo()  {
  return new Promise((resolve, reject) => {
    this.afDB.database.ref('Perfil'+this.auth.getUser()+'/').orderByChild('uid').once('value', snapshot => {
      let catData = snapshot.val();
      let temparr = [];
      for (var key in catData) {         
           
          temparr.push(catData[key])   
      
        
      }
      resolve(temparr);
    });
  })
}
}




