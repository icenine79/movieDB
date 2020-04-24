import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message:string;
  loginForm: FormGroup;
  errorMessage:boolean;

  trailer:any
   constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute){

  }



  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  get userName() { return this.loginForm.get('userName') }
  get password() { return this.loginForm.get('password') }



  onSubmit() {
    if (this.loginForm.invalid)
      return;
    let credentials = {
      userName: this.userName.value,
      password: this.password.value
    }
    this.authService.login(credentials).
    pipe(first())
    .subscribe(data => {
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/home'  ]);
      console.log(data);
    },(error:any)=>{
      console.log(error)
      this.errorMessage=true;
    })
  }
}
