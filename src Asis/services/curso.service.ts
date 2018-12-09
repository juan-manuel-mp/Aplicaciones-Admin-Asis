import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class CursosService{
	email : string;
	pass : string;
	
	constructor(public afDB: AngularFireDatabase){}
	
    cursos=[];
    public getCursos(){
        //return this.cursos;
        return this.afDB.list('cursos/').valueChanges();
    }
	public getCurso(nombre){
		//return this.cursos.filter(function(e,i){return e.nombre ==nombre})[0] || {nombre:null,apellidoP:null,apellidoM:null};
		return  this.afDB.object<{nombre,instructor,resumen,temario,duracion,fechainicio,fechatermino,horariocurso,fechainicioinscripcion,fechacierreinscripcion,lugar,maxparticipantes,minParticipantes,costo,observaciones}>('cursos/'+ nombre );
		//return  this.afDB.object('cursos/'+ nombre );
    }
    public createCurso(curso){
        //this.cursos.push(curso);
		this.afDB.database.ref('usuarios/'+curso.nombre).set(curso);
		
    }
	public editCurso(curso){
        /*for(let i =0; i<curso.length;i++){
			if(this.cursos[i].nombre == curso.nombre){
				this.cursos[i] = curso
			}
		}*/
		this.afDB.database.ref('cursos/'+curso.nombre).set(curso);
    }
	public deleteCurso(curso){
		this.afDB.database.ref('cursos/'+curso.nombre).remove();
		/*for(let i =0; i<curso.length;i++){
			if(this.cursos[i].nombre == curso.nombre){
				this.cursos.splice(i, 1);
			}
		}*/
		alert("Curso eliminado");
	}
	public ocultarCurso(curso){
		this.afDB.database.ref('cursos/'+curso.nombre).equalTo(curso);
	}
	public cursoInscrito(curso){
		
		this.afDB.database.ref('cursos/'+curso.nombre).equalTo('nombre');
	}
	
	}