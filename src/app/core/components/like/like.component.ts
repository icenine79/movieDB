import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Output() change = new EventEmitter()
  like: number = 0;

  onLike() {
    this.change.emit({
      likes: this.like++
    })
  }

}
