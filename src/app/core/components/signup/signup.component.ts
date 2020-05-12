import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { PasswordValidators } from "./password.validator";
import { User } from 'src/app/shared/models/user';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: boolean;
  message: string;
  registered = false
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");

      this.getUser(id);
    });
  }
  getUser(id: string | number) {
   /*  this.authService.regis(id).subscribe((user: User) => {
      this.editUser(user), (err: any) => console.log(err);
    }); */
  }

  editUser(user: User) {
    this.registerForm.patchValue({
      email: user.email,
      password: user.password
    });
  }



  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get retype() {
    return this.registerForm.get("retype");
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.registered = true
    this.authService.registeruser(this.registerForm.value)
    .subscribe(data=>{
      console.log(data)
    })

  }

  createForm() {
    this.registerForm = this.fb.group(
      {
        email: ["", [Validators.required]],
        password: [null, [Validators.required, Validators.minLength(5)]],
        retype: ["", Validators.required]
      },
      {
        validator: PasswordValidators.passwordsShouldMatch
      }
    );
  }
}
