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

  getTrailer(movie){
  return this.http.get(
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+movie+"&topicId=%2Fm%2F02vxn&key=AIzaSyB42WhSTkS6_0uUPX6EuGakkGz4RHXnlIc"
  ).pipe(
    map(res => res['items']),
    map((items: Array<any>) => {
      return items.map(item => ({
        title: item.snippet.title,
        videoUrl:  `https://www.youtube.com/embed/${item.id.videoId}`,
      }))
    })
  );
}
 
  getEpisode(name: string, episode: string):Observable<Movie> {
    this.name = name;
    return this.http.get<Movie>(
      "https://www.omdbapi.com/?t=" +
        name +
        "&Season=" +
        episode +
        "&apikey=87c31e60"
    );
  }


 getMovies(name: string): Observable<Movie> {
    return this.http.get<Movie>("https://www.omdbapi.com/?t=" + name + "&plot=full&apikey=87c31e60");
    
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
