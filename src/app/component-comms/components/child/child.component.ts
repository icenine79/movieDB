import { Component, OnInit, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommsRoutingModule } from '../../comms-routing.module';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() fromChild= new EventEmitter()
  constructor() { }

  ngOnInit() {

  }

sendMessagetoParent(message:string){
  this.fromChild.emit(message)

}

}
