import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "src/app/shared/models/movie";
import {  FormBuilder } from "@angular/forms";
import {Location} from '@angular/common';


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
  episodes: [] = [];
  episode: boolean;
  id: string;
  plot: any;
 

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {

    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.id = params.get("title");
          return this.movieService.getMovies(this.id);
        })
      )
      .subscribe((movieList: Movie) => {
        this.movie = movieList[0];
        this.plot = movieList[1];
        this.seasons = movieList[0];
        this.seasons = +this.seasons["totalSeasons"];
        this.showDropDown();
      });
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





}
