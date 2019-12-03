import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators{

    static passwordsShouldMatch(control: AbstractControl):  ValidationErrors | null  {
        let password = control.get('password');
        let retype = control.get('retype');
        
        
            if (password.value !== retype.value)
            return ({passwordsShouldMatch: true})
            return null;
    }
}