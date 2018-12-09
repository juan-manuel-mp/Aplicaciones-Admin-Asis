import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CursosService } from '../../services/curso.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cursos=[];
  constructor(public navCtrl: NavController,public cursosService:CursosService,public nav:NavController) {
    cursosService.getCursos()
    .subscribe(cursos =>{
      this.cursos=cursos;
    });
  }
  public verDetalle(nombre){
    this.navCtrl.push(DetailPage,{nombre:nombre});
  }
  public createCurso(){
    this.navCtrl.push(DetailPage,{nombre:0});
  }

}
//