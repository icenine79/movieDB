import { MoviesService } from './../../services/movies.service';
import { User } from './../../../shared/models/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Output() change = new EventEmitter<any>()
  userReviews:any;
  likes:any;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getReviews().valueChanges().subscribe(data=>{
      this.userReviews=data;
      })
  }

sendReviews(){
  this.change.emit({reviews:this.userReviews})
}

  onChange(event){
    this.likes=event
    console.log(this.likes)
    this.movieService.insertLike(this.likes).subscribe(data=>{

      console.log(data)
      })

  }
}
