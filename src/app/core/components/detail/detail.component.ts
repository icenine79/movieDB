import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "src/app/shared/models/movie";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

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
  tickets: boolean = false;
  ticketsForm: FormGroup;
  submitted = false;
  @Input('movies') movies:any;
  @Input('movieRate') movieRate:number;
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.movieRate)
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
        this.ticketsFormBuild();
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

  ticketsFormBuild() {
    if (!this.seasons) {
      this.tickets = true;
      this.ticketsForm = this.fb.group({
        numberOfTickets: ["", Validators.required],
        tickets: new FormArray([])
      });
    }else{
      this.tickets=false;
    }
  }

  get f() {
    return this.ticketsForm.controls;
  }
  get t() {
    return this.f.tickets as FormArray;
  }

  onChangeTickets(e) {
    const numberOfTickets = e.target.value || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(
          this.fb.group({
            name: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]]
          })
        );
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketsForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.ticketsForm.value, null, 4)
    );
  }

  onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.ticketsForm.reset();
    this.t.clear();
  }

  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.t.reset();
  }

  searchEpisode(search) {
    this.movieService.getEpisode(this.id, search).subscribe(data => {
      this.episodes = data["Episodes"];
      console.log(this.episodes);
      this.episode = true;

      console.log(this.episodes);
    });
  }
}
