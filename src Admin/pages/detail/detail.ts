import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursosService } from '../../services/curso.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
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
    console.log('ionViewDidLoad DetailPage');
  }
  addCurso(){
	  if(this.nombre != 0){
		  //estamos editando
		 this.cursoService.editCurso(this.curso);
		alert("Curso editado correctamente");
		
		  
	  }else{
	  
    this.cursoService.createCurso(this.curso);
	alert("Curso creado correctamente");
	
  }
  this.navCtrl.pop();
  }
  deleteCurso(){
	  this.cursoService.deleteCurso(this.curso);
	  //alert("Curso eliminado");
	  this.navCtrl.pop();
  }
  ocultarCurso(){
    this.cursoService.ocultarCurso(this.curso);
    this.navCtrl.pop();
  }
}
