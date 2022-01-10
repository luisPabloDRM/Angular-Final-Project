import { Component, OnInit } from '@angular/core';
import {SocialUser,SocialAuthService} from 'angularx-social-login'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {


  userLogged : SocialUser
  isLogged: boolean

  constructor(
    private authService: SocialAuthService,
    private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe(data=>{
      this.userLogged = data
      this.isLogged = (this.userLogged !=null)})

  }

}
/* $('.carouselExampleControls').carousel({
  interval: 8000,
  pause:true,
  wrap:false
}); */

