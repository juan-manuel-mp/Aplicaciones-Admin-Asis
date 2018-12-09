import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from "../principal/principal";
import { RegistroPage } from "../registro/registro";
import { User } from 'firebase';
import { CursosService } from '../../services/curso.service';
import { AngularFireAuth} from '@angular/fire/auth';
import { stringify } from '@angular/core/src/render3/util';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /*user: String = "";
  pass: String = "";

  cuser: String = "asis";
  cpass: String = "asis";  
*/
  user = {} as CursosService;

  constructor(public navCtrl: NavController,public authm:AngularFireAuth) {

  }

   async login(user:CursosService){
     try{
    const result = await this.authm.auth.signInWithEmailAndPassword(user.email,user.pass);
      console.log(result);
      if (result){
        this.navCtrl.push(PrincipalPage);
      }
      
      
  }
     catch(e){
      alert("Detalles de acceso incorrectos")
      this.navCtrl.push(HomePage);
      console.error(e);
     }

  }
   registro(){
    this.navCtrl.push(RegistroPage);

  }



  /*ini(){
    console.log(this.user);
    console.log(this.pass);

    if( this.user == this.cuser && this.pass == this.cpass ){
      this.navCtrl.push(PrincipalPage);
    }else{
      console.log("ERROR");
    }
  }

  sign(){
    this.navCtrl.push(RegistroPage);
  }*/

}