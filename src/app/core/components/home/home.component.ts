import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MoviesService } from "../../services/movies.service";
import { shuffle } from "../../../shared/globals";
import { Movie } from "../../../shared/models/movie";
import { Subscription } from "rxjs";
import { Fader } from 'src/app/shared/animations';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations:[Fader.animations]
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[];
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
    this.getTop("Under the Dome");
    //Get movies from backend
    this.movieService.getStoredMovies().subscribe(data => {
      this.storedMovies = data;
      this.duplicatedMovies();
    });


   }



  get name() {
    return this.movieForm.get("name");
  }

  //Method to display the top 10 movies and also to display default movie on page load
  getTop(movie) {
    this.subscription = this.movieService
      .getMovies(movie)
      .subscribe(data => {
        this.movies = Array.of(data);
      });
  }

  duplicatedMovies() {
    //find duplicated entries and
    let findDuplicates = arr =>
      arr.filter((item, index) => arr.indexOf(item) != index);
    let repeated: any = findDuplicates(this.storedMovies);
    //create a new array with unique values
    this.repeatedMovie = [...new Set(repeated)];
    //shuffle para o top 5 variar
    shuffle(this.repeatedMovie);
    var counts = {};
    repeated.forEach(function(x) {
      counts[x] = (counts[x] || 0) + 1;
    });
  }

  //insert movie into backend array
  insertMovie(movie: any) {
    this.subscription = this.movieService
      .storeMovies(movie)
      .subscribe(() => {});
  }
  getMovie() {
    this.spinner = true;

    (this.subscription = this.movieService
      .getMovies(this.name.value)
      .subscribe(data => {
        if(data.Error){
          this.error=true
          this.spinner=false;
        }else{
        this.movies = Array.of(data);
        this.spinner = false;
        this.error = false;
         this.movieRate = this.movies.map(rating => rating['imdbRating'].toString());
        }
      })), error => console.log(error)

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
