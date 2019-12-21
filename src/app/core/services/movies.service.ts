import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { Movie } from "src/app/shared/models/movie";
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  name: string;
  constructor(private http: HttpClient) {}

  getTrailer(): Observable<Object> {
    let url =
     ' https://www.googleapis.com/youtube/v3/search?'+
     'part=snippet&q=predator&topicId=%2Fm%2F02vxn&key=AIzaSyB42WhSTkS6_0uUPX6EuGakkGz4RHXnlIc'
    return this.http.get(url).pipe(
      map(res => {
        return res['items'];
      })
    );
  }





  getMovies(name: string, year?: string): Observable<any> {
    let shortPlot = this.http.get(
      "https://www.omdbapi.com/?t=" +
        name +
        "&plot=short&y=" +
        year +
        "&apikey=87c31e60"
    );
    let fullPlot = this.http.get(
      "https://www.omdbapi.com/?t=" + name + "&plot=full&apikey=87c31e60"
    );
    return forkJoin([shortPlot, fullPlot]);
  }

  getEpisode(name: string, episode: string) {
    this.name = name;
    return this.http.get(
      "https://www.omdbapi.com/?t=" +
        name +
        "&Season=" +
        episode +
        "&apikey=87c31e60"
    );
  }

  //FAKEBACKEND
  storeMovies(movies: Movie): Observable<Movie[]> {
    return this.http.post<Movie[]>(`/movies/store`, movies);
  }
  getStoredMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("/movies");
  }
  getMovie(id: number | string) {
    return this.http.get(`/movies/${id}`);
  }

  deleteMovie(id: number | string) {
    return this.http.delete(`/movies/${id}`);
  }
}
