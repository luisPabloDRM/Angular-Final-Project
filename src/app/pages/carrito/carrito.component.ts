import { Component, OnInit } from '@angular/core';
import { Card } from '../productos/card/card.model';
import { TuberiaService } from '../productos/card/tuberia.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})



export class CarritoComponent implements OnInit {
  contador : number = 0
  titulo:boolean
  chek:boolean
  card:any
  constructor(public service:TuberiaService) { }

  ngOnInit() :void{
    this.service.getInfo().subscribe(dat=>{console.log("recibiendo desde card",dat);
    // this.data=dat
    this.contador++
    })


  }

}
