import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-child',
  templateUrl: './log-child.component.html',
  styleUrls: ['./log-child.component.css']
})
export class LogChildComponent implements OnInit, OnChanges {
  @Input('loginForm') loginForm: FormGroup
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loginForm.valueChanges.subscribe(changes => {
      console.log(changes)
      changes = changes
     // console.log(changes.userName)
    });
  }
}
