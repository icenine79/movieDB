import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MoviesService } from "../../services/movies.service";
import { Subscription } from "rxjs";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  movieForm: FormGroup;
  storedMovies: any[] = [];
  spinner: boolean;
  repeatedMovie: any;
  subscription: Subscription;
  notfound: string;
  error: boolean;
  likes:any
  movieRate: any;
  userReviews:any;

  constructor(
    private movieService: MoviesService,
    private fb: FormBuilder,
    private http:HttpClient) {}

  ngOnInit() {


 this.movieForm = this.fb.group({
      name: ["", Validators.required]
    });
 

   }



  get name() {
    return this.movieForm.get("name");
  }

 
  
reviewReceiver(event){
  console.log(event)
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
