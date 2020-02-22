import { MoviesService } from './../../services/movies.service';
import { User } from './../../../shared/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() rev: any;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  }

receiver(event){

}



}
