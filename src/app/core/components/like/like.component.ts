import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Output() change=new EventEmitter()
  plus:number=1;
  constructor() { }

  ngOnInit() {
  }

increase(){
  this.change.emit({like:this.plus++})
}


}
