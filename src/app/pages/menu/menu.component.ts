import { Component, OnInit } from '@angular/core';
import {SocialUser,SocialAuthService} from 'angularx-social-login'
import { Router } from '@angular/router';
import { TuberiaService } from '../productos/card/tuberia.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userLogged : SocialUser
  isLogged: boolean


  constructor(
    private authService: SocialAuthService,
    private router: Router,
    public service:TuberiaService,
    ) { }

  ngOnInit() {

      this.authService.authState.subscribe(data=>{
      this.userLogged = data
      this.isLogged = (this.userLogged !=null)})



      this.service.getInfo().subscribe(dat=>{console.log("recibiendo desde card",dat);
      // this.data=dat
      })


    }
logOut():void{
  this.authService.signOut().then((data)=>{
    this.router.navigate(['/login'])
  })

}


}
