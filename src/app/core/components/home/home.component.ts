import { Component, OnInit, OnDestroy } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MoviesService } from "../../services/movies.service";
import { shuffle, moviesArray } from "../../../shared/globals";
import { Movie } from "../../../shared/models/movie";
import { Subscription } from "rxjs";
import { CacheService } from '../../services/cache.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
   movies: any;
   movieForm: FormGroup;
   storedMovies: any[] = [];
   spinner: boolean;
   repeatedMovie: any;
   subscription: Subscription;
   notfound: string;
   error: boolean;
  topMovie$:any
  constructor(
    private movieService: MoviesService,
    private cacheService:CacheService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.movieForm = this.fb.group({
      name: ["", Validators.required]
    });
    this.getTop("Belle de Jour");
    //Get movies from backend
    this.movieService
    .getStoredMovies().subscribe(data => {
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
      .subscribe(dataList => {
        this.movies = Array.of(dataList[0]);
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
    //API CALL
    this.subscription = this.movieService
      .getMovies(this.name.value)
      .subscribe((dataList: Movie) => {
        this.movies = Array.of(dataList[0]);
        this.spinner = false;
        var error: any = this.movies.map(error => error.Error);
        var title: any = this.movies.map(title => title.Title);

        if (error[0]) {
          this.notfound = error[0];
          this.error = true;
        } else {
          this.error = false;
        }

      }),
      error => console.log(error);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
