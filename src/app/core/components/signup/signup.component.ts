import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidators } from "./password.validator";
import { UsernameValidators, NameValidators } from "./username.validator";
import { User } from 'src/app/shared/models/user';
import { EmailValidator } from './email.validator';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: boolean;
  message: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");

      this.getUser(id);
    });
  }
  getUser(id: string | number) {
    this.userService.getUser(id).subscribe((user: User) => {
      this.editUser(user), (err: any) => console.log(err);
    });
  }

  editUser(user: User) {
    this.registerForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      password: user.password,
      retype: user.password,
      city: user.city,
      street: user.street,
      code: user.code
    });
  }

  get firstName() {
    return this.registerForm.get("firstName");
  }
  get lastName() {
    return this.registerForm.get("lastName");
  }
  get userName() {
    return this.registerForm.get("userName");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get retype() {
    return this.registerForm.get("retype");
  }
  get city() {
    return this.registerForm.get("city");
  }
  get street() {
    return this.registerForm.get("street");
  }
  get code() {
    return this.registerForm.get("code");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get phone() {
    return this.registerForm.get("phone");
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    this.userService.register(this.registerForm.value).subscribe(
      data => {
        this.router.navigate(["/login"]);
      },
      error => {
        this.errorMessage = true;
        console.log(error);
      }
    );
  }
addAdress(){
  (<FormArray>this.registerForm.get("adress")).push(this.addAdressGroup());
}

addAdressGroup(){
  return this.fb.group({
    city: ["", Validators.required],
        street: ["", Validators.required],
        code: ["", Validators.required]
  })
}


  createForm() {
    this.registerForm = this.fb.group(
      {
        firstName: [
          "",
          Validators.required,
          NameValidators.cannotContainNumbers
        ],
        lastName: ["", [Validators.required]],
        userName: [
          "",
          Validators.required  ,
          UsernameValidators.cannotContainSpace
        ],
       /*  email: ["", [Validators.required, EmailValidator.invalidEmail]],
        phone: ["", [Validators.required]],
          adress: this.fb.array([

          ]), */

        city: ["", Validators.required],
        street: ["", Validators.required],
        code: ["", Validators.required],
        password: [null, [Validators.required, Validators.minLength(5)]],
        retype: ["", Validators.required]
      },
      {
        validator: PasswordValidators.passwordsShouldMatch
      }
    );
  }
}
