import { FormGroup } from "@angular/forms";

// Función para validar la contraseña
// Entran dos valores por parametro

export function comparePassword(passwordName:string,passwordRepeatName:string){
  return (formGroup: FormGroup) => {
		// Asignamos dos controladores a nuestros valores por param
    const passwordControl = formGroup.controls[passwordName];
    const passwordRepeatControl = formGroup.controls[passwordRepeatName];
		//  Control de errores
    if (passwordRepeatControl.errors && !passwordRepeatControl.errors['mustMatch']) {
      return;
    }
		// Setter Errores
    if (passwordControl.value !== passwordRepeatControl.value) {
      passwordRepeatControl.setErrors({ mustMatch: true });
    } else {
      passwordRepeatControl.setErrors(null);
    }
  };

}
