import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { Movie } from "src/app/shared/models/movie";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  name: string;
  constructor(private http: HttpClient) {}

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
