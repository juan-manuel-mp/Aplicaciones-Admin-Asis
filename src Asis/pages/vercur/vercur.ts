import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuscurPage } from '../buscur/buscur';
import { DatoscurPage } from '../datoscur/datoscur';
import { CursosService } from '../../services/curso.service';
/**
 * Generated class for the VercurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vercur',
  templateUrl: 'vercur.html',
})
export class VercurPage {

  cursos=[];
  constructor(public navCtrl: NavController,public cursosService:CursosService,public nav:NavController) {
    cursosService.getCursos()
    .subscribe(cursos =>{
      this.cursos=cursos;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VercurPage');
  }

  buscur(){
    this.navCtrl.push(BuscurPage);
  }
  datcur(nombre){
this.cursosService.getCurso(nombre)
    this.navCtrl.push(DatoscurPage);
  }

}
