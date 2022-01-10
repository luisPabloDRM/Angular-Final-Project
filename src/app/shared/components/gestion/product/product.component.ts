import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() titulo:string =''
@Input() genero:string = ''
@Input() descripcion:string = ''
@Input() img:string = ''
@Input() precio:string =''

  constructor() { }

  ngOnInit(): void {
  }

}
