
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
  guardarMascota(mascota){
    if(!mascota.id){
    mascota.id  = Date.now();
    }
    return this.afDB.database.ref('mascota/'+this.auth.getUser()+'/'+mascota.id).set(mascota)
 }

 getMascota(){
  return this.afDB.list('mascota/'+this.auth.getUser()).valueChanges();
}
getPerdidas(){
  return this.afDB.list('perdida/'+this.auth.getUser()).valueChanges();
}

getPerdidasTodas(){
  return this.afDB.list('perdida/').valueChanges();
}

publicar(perdida){ 
  
  return this.afDB.database.ref('perdida/'+this.auth.getUser()).set(perdida)
}

AdopcionPermanente(adopcion){ 
  
  return this.afDB.database.ref('adopcionPermanente/'+this.auth.getUser()).set(adopcion)
}

public borrarPerdida(id){
  this.afDB.database.ref('perdida/'+this.auth.getUser()+'/'+id).remove();

}

AdopcionTemporal(adopciont){ 
  
  return this.afDB.database.ref('adopcionTemporal/'+this.auth.getUser()).set(adopciont)
}



}


