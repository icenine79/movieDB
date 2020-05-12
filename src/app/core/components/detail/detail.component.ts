import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "src/app/shared/models/movie";
import {  FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Location} from '@angular/common';
import { SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  movie: any;
  seasons: any;
  test: any[] = [];
  dropdown: boolean;
  episodes: any[] = [];
  episode: boolean;
  id: string;
  plot: any;
  trailer:any;
  safeUrl: SafeResourceUrl;
  reviewForm: FormGroup;
  userName:string;
  userReviews:any;
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthService
  ) {
     this.userName= this.authService.currentUser
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.id = params.get("title");
          return this.movieService.getMovies(this.id);
        })
      )
      .subscribe(data => {
        this.movie = data
        this.plot = data
        this.seasons = data
        this.seasons = +this.seasons["totalSeasons"];
        this.showDropDown();

        this.movieService.getTrailer(this.movie.Title).subscribe(data=>{
          this.trailer=data
        })
      });
      this.reviews();

  }

  showDropDown() {
    if (!this.seasons) {
      this.dropdown = false;
    } else {
      this.dropdown = true;
    }
    for (let i = 1; i < this.seasons + 1; i++) {
      this.test.push(i);
    }
  }

  searchEpisode(search) {
    this.movieService.getEpisode(this.id, search).subscribe(data => {
      this.episodes = data["Episodes"];
      console.log(this.episodes);
      this.episode = true;

      console.log(this.episodes);
    });
  }


goBack(){
this.location.back()
}

reviews(){
  this.reviewForm= this.fb.group({
    review: ['', Validators.required]
  })
}
get userReview(){return this.reviewForm.get('review')}

submitReview(){
let credentials = {
  author: this.userName,
  review: this.userReview.value,
  movie: this.id
}

  this.movieService.createReview(credentials).then(data=>{
    console.log(data)
  }).catch(error=>{
    console.log(error)
  })
}


}
