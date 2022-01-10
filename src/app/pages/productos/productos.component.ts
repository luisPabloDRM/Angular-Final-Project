import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/shared/components/gallery/gallery.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  isloading:boolean =true
  filtergenero=''
  filterpost=''
  array:[]=[]
  constructor(private recuest:GalleryService) { }

  ngOnInit() {
    this.recuest.getDatos().subscribe((data:any)=>{console.log('datos recibidos',data),
    this.isloading=false
    this.array=data
    // ,this.array=data.items
    })
  }

}
