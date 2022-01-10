import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

/*descripcion:string = ''
  inputText:string = ''
  inputNumber:string = ''


  Articulo(describe:string){
this.descripcion = describe
}
precio(numero:string){
this.inputNumber = numero
}
name(letra: string){
  this.inputText = letra
} */
tituloJuego:string=''
generoJuego:string=''
descripcionJuego:string=''
img:string=''
precioJuego:string=''
titulo(letra:string){
  this.tituloJuego=letra
}
genero(letra:string){
  this.generoJuego=letra
}
descripcion(letra:string){
  this.descripcionJuego=letra
}
imagen(letra:string){
  this.img=letra
}
precio(numero:string){
this.precioJuego=numero
}

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

}
