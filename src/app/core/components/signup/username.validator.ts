import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        return new Promise((resolve, reject)=>{
            let input= control.value as string;
            if ((input).indexOf(' ') >= 0)
            resolve({cannotContainSpace: true})
            else
            resolve(null);
        })
    }
}

export class NameValidators{
    static cannotContainNumbers(control:AbstractControl): ValidationErrors | null {
        return new Promise((resolve,reject)=>{
           let input=control.value as string;
            if(input.match((/\d+/g))!=null) 
            resolve({cannotContainNumbers:true})
            else 
            resolve(null)

        })
    }
}