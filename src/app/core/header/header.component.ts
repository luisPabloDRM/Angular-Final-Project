import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  urls: {link:string, title: string}[] = [{
    link: "",
    title: "Home"
  },{
    link: "/gallery",
    title: "galeria"
  },{
    link: "/contact",
    title: "Contacto"
  },{
    link: "/gestion",
    title: "gestion"
  },{
    link: "/buscador",
    title: "buscador"
  },{
    link: "/promociones",
    title: "promociones"
  },{
    link: "/transporte",
    title: "transporte"
  },
  {
    link: "/registro",
    title: "registro"
  },{
    link: "/about",
    title: "acerca de"
  }]




  constructor() { }

  ngOnInit() {
  }

}
