import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,AbstractControlOptions,Validators, } from '@angular/forms';
import { UserRegister } from './models/user.model';
import { comparePassword } from './models/customValidator';

import { FormControl,ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  //iconos
  // Incialización del formulario
  public userRegisterForm: FormGroup = new FormGroup({});
	// variable submitted a false
	public submitted: boolean = false;
  public isLoading?: boolean;
  show: boolean;





  constructor(private formBuilder: FormBuilder,
    ) {
      this.show = false
  }

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.maxLength(20)]],
        email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/)]],
        passwordRepeat: ['', [Validators.required, Validators.pattern(/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/)]],
      },
      {
        validator: comparePassword('password', 'passwordRepeat'),
      } as AbstractControlOptions
    );

  }

  onSubmit(): void {
    this.submitted = true;

    // Si el formulario es valido
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
}
