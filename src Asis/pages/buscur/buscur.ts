import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InscripcionPage } from '../inscripcion/inscripcion';
import { CursosService } from '../../services/curso.service';
/**
 * Generated class for the BuscurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscur',
  templateUrl: 'buscur.html',
})
export class BuscurPage {
  cursos=[];
  constructor(public navCtrl: NavController,public cursosService:CursosService,public nav:NavController) {
    cursosService.getCursos()
    .subscribe(cursos =>{
      this.cursos=cursos;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscurPage');
  }

  datcur(nombre){
    this.navCtrl.push(InscripcionPage,{nombre:nombre});
    //this.navCtrl.push(InscripcionPage);
  }

}
