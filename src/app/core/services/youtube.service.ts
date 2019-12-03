import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getTrailer(name?:string): Observable<Object> {
    let url =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=trailer&topicId=%2Fm%2F02vxn&key=AIzaSyDDSr9Rifji3ZsRwAhAVtfQefc08QhFvt4";
    return this.http.get(url).pipe(
      map(res => {
        return res["items"];
      })
    );
  }
}
