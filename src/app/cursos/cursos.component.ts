import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service'
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  nomePortal: string;
  
  cursos:string[];
  
  constructor() {
    this.nomePortal= "http://url.Portal"

    // for (let i=0; i<this.cursos.length; i++){
    //   let curso = this.cursos[i];
    // }
  var servico = new CursosService();
    
   }

  ngOnInit() {
  }

}
