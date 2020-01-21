import { LocalService } from './../../services/local.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('user') user:any;
@Output('message') message= new EventEmitter<string>()
  constructor(private localService: LocalService) { }

  ngOnInit() {
    console.log(this.user)
    this.localService.currentMessage.subscribe(data=>console.log(data))
    console.log(this.localService.changeMessage('new message'))

  }

sendMessage(){
  this.message.emit('Hello from child');
}

imc(height,weight){
  return weight*(height/height);
}

}
