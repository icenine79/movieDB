import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  posts: any[] = ['Gram', 'steve', 'joker'];
  message: any;


  @Output() log = new EventEmitter();

  constructor(private sharedService: SharedService) { }

  ngOnInit() {

   // this.sharedService.currentUsers.subscribe(message => this.message = message)

  }

messageReceptor(message:any){
  console.log('message from child: ' + message)
}

   /* newMessage(message: any) {
    let x = this.posts.push(message)
    if ( this.posts instanceof Array){
      console.log('its an array')
      this.posts.forEach(element => {
        if(typeof element ==="string")
        console.log('array of strings')
        console.log(element)
      });
    }
    this.sharedService.changeMessage(x)
    this.log.emit(x)
    console.log(this.posts)
  } */
}
