import { MoviesService } from './../../../core/services/movies.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

storedMovies:any;
duplicated:any;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getStoredMovies().subscribe(data=>{
      this.storedMovies=data;
      console.log(this.storedMovies)

    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

  this.duplicated=findDuplicates(this.storedMovies) // All duplicates
    })
  }

}
