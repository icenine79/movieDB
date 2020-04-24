import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidators } from "./password.validator";
import { UsernameValidators, NameValidators } from "./username.validator";
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
    private userService: UserService,
    private router: Router,
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
    this.userService.getUser(id).subscribe((user: User) => {
      this.editUser(user), (err: any) => console.log(err);
    });
  }

  editUser(user: User) {
    this.registerForm.patchValue({
      userName: user.userName,
      email: user.email,
      
    });
  }

  get userName() {
    return this.registerForm.get("userName");
  }
  get password() {
    return this.registerForm.get("password");
  }
  
  get email() {
    return this.registerForm.get("email");
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.registered = true
    this.userService.register(this.registerForm.value)
      .subscribe(data => {

        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 2000)
      }, error => {
        this.errorMessage = true;
        console.log(error);
      })
  }

  createForm() {
    this.registerForm = this.fb.group({
        userName: ["", Validators.required, NameValidators.cannotContainNumbers],
        email: ["", [Validators.required]],
        password: [null, [Validators.required, Validators.minLength(5)]]
       
    })
  }
}

