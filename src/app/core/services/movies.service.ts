import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
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

  getEpisode(name: string, episode: string):Observable<any> {
    this.name = name;
    return this.http.get<any>(
      "https://www.omdbapi.com/?t=" +
        name +
        "&Season=" +
        episode +
        "&apikey=87c31e60"
    );
  }


 getMovies(name: string): Observable<any> {
    return this.http.get<any>("https://www.omdbapi.com/?t=" + name + "&plot=full&apikey=87c31e60");

  }
//FIREBASE






  //FAKEBACKEND
  storeMovies(movies: any): Observable<any[]> {
    return this.http.post<any[]>(`/movies/store`, movies);
  }
  getStoredMovies(): Observable<any[]> {
    return this.http.get<any[]>("/movies");
  }

  insertLike(like): Observable<any>{
    return this.http.post<any>(`/movies/like`, like);

  }

  getLikes(): Observable<any> {
    return this.http.get<any>("/likes");
  }

  getMovie(id: number | string) {
    return this.http.get(`/movies/${id}`);
  }

  deleteMovie(id: number | string) {
    return this.http.delete(`/movies/${id}`);
  }
}
