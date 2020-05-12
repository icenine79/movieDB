import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { Fader } from "../../../shared/animations"



@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [Fader.animations]
})
export class LoginComponent implements OnInit {
  message: string;
  loginForm: FormGroup;
  errorMessage: boolean;

  trailer: any
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {

  }



  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }



  onSubmit() {
    if (this.loginForm.invalid)
      return;

    this.authService.login(this.loginForm.value)
      .subscribe(data => {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/home']);
        console.log(data)

      })
  }
}
