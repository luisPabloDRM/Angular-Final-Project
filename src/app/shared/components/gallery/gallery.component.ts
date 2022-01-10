import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';





@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


constructor(private recuest:GalleryService) { }

array:[]


ngOnInit(): void {
  this.recuest.getDatos().subscribe((data:any)=>{console.log('datos recibidos',data),

  this.array=data
  // ,this.array=data.items
  })
  }

}
