import { AbstractControl, ValidationErrors } from "@angular/forms";



export class EmailValidator {
  static invalidEmail(control: AbstractControl): ValidationErrors | null {
    return new Promise((resolve, reject) => {
      let input = control.value as string;
      if (!input.match( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) != null)
      resolve({ invalidEmail: true });
      else resolve(null);
    });
  }
}


