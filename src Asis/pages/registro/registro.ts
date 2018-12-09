import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CursosService } from '../../services/curso.service';

import { AngularFireAuth} from '@angular/fire/auth';
import { User } from 'firebase';
import { BuscurPage } from '../buscur/buscur';

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
  user = {} as CursosService;
  constructor(public navCtrl: NavController, public navParams: NavParams,private authM:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  /*darAlta(){
    this.navCtrl.push(HomePage);
  }
*/
  async register(user: CursosService){
    try {
    const result = await this.authM.auth.createUserWithEmailAndPassword(user.email,user.pass);
      console.log(result);
        this.navCtrl.push(HomePage);
        alert("Cuenta creada");
        
      
  }
    catch(e){
      console.error(e);
    }
  }

}
