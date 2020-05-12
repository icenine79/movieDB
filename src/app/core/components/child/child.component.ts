import { MoviesService } from './../../services/movies.service';
import { LocalService } from './../../services/local.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('user') user:any;
@Output('message') message= new EventEmitter<string>()
@Output('movies') movies =new EventEmitter<any>()
storedmovies:any
  constructor(private localService: LocalService, private movieService: MoviesService) { }

  ngOnInit() {
    console.log(this.user)
    this.movieService.getStoredMovies().subscribe(data=>{
      this.storedmovies=data
      console.log(this.storedmovies)
    })
    this.localService.currentMessage.subscribe(data=>console.log(data))
    console.log(this.localService.changeMessage('new message'))

  }

sendMessage(){
  this.message.emit(this.storedmovies);
}



}
