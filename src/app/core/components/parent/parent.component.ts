import { LocalService } from './../../services/local.service';
import { ChildComponent } from './../child/child.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  user: any;
  @ViewChild(ChildComponent, { static: false }) child;

  constructor(private authService: AuthService, private localService: LocalService) {


    this.authService.currentUser.subscribe(data => {
      this.user = data;
      console.log(this.user)
    })
  }

  ngOnInit() {
    this.localService.currentMessage.subscribe(data=>console.log(data))
    console.log(this.localService.changeMessage('new message'))
  }
  receivedMessage($event) {
    console.log($event)
  }

  ngAfterViewInit() {

  }


}
