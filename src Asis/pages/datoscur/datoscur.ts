import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursosService } from '../../services/curso.service';

/**
 * Generated class for the DatoscurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datoscur',
  templateUrl: 'datoscur.html',
})
export class DatoscurPage {

  curso={nombre:null,instructor:null,resumen:null,temario:null,duracion:null,fechainicio:null,fechatermino:null,horariocurso:null,fechainicioinscripcion:null,fechacierreinscripcion:null,lugar:null,maxparticipantes:null,minParticipantes:null,costo:null,observaciones:null};
  nombre:null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public cursoService:CursosService) {
  this.nombre=navParams.get('nombre')
  if(this.nombre != 0){
    cursoService.getCurso(this.nombre)
    .valueChanges().subscribe(curso => {
      this.curso=curso;
    });
  }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatoscurPage');
  }

}
