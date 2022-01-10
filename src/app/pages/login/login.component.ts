import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider,SocialUser,} from "angularx-social-login";
import { FormBuilder, FormGroup,AbstractControlOptions,Validators, } from '@angular/forms';
import { UserRegister } from '../../shared/components/registro/models/user.model';
import { comparePassword } from '../../shared/components/registro/models/customValidator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 //iconos
  // Incialización del formulario
  public userRegisterForm: FormGroup = new FormGroup({});
	// variable submitted a false
	public submitted: boolean = false;
  public isLoading?: boolean;
  socialUser: SocialUser
  userLogged : SocialUser
  isLogged: boolean
  show: boolean;
  /* correo:string
  pass:string
  pp:boolean */
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) {  this.show = false}

  ngOnInit() {


    this.authService.authState.subscribe(data=>{
      this.userLogged = data
      this.isLogged = (this.userLogged !=null)})

      this.userRegisterForm = this.formBuilder.group(
        {
          name: ['', [Validators.required, Validators.maxLength(20)]],
          email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
          password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
          passwordRepeat: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
        },
        {
          validator: comparePassword('password', 'passwordRepeat'),
        } as AbstractControlOptions
      );
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data=>{
      this.socialUser = data
      this.isLogged = true
      this.router.navigate(['/'])
    })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(dat=>{
      this.socialUser = dat
      this.isLogged = true
      this.router.navigate(['/'])
    });
  }

/*   logIn(event:string){if(event = 'M6ZSmKumhqDMv6H')
    { this.pp=false}


  } */

  logOut(): void{
    this.authService.signOut()
  }


  onSubmit(): void {
    this.submitted = true;

    if (this.userRegisterForm.valid) {



        const user: UserRegister = {
          name: this.userRegisterForm.get('name')?.value,
          email:this.userRegisterForm.get('email')?.value,
          password: this.userRegisterForm.get('password')?.value,
          passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
          isActivate: false
        };
        console.log(user);

        this.userRegisterForm.reset();

    }
    this.submitted = false;
  }
  password() {
    this.show = !this.show;
}
/* verMenu:Boolean=true
pass:any
ema:any
loginoki(){
  if(this.pass.value=='M6ZSmKumhqDMv6H' && this.ema.value=='M6ZSmKumhqDMv6H'){
    this.verMenu=false
    }
} */

}
