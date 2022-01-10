import { Component, Input, OnInit } from '@angular/core';
import {Card} from './card.model'
import { TuberiaService } from './tuberia.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

@Input() item :Card
card:Card[]=[]

contador:number=0
constructor(private service:TuberiaService) {

}

ngOnInit() {

}


descarga(evento:any){
this.card=evento
this.service.sendInfo(this.card,)
  console.log('esto aun sigue en el componente card',this.card);
alert('tu articulo ha sido añadido')

  }
}
