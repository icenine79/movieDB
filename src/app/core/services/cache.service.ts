import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class CacheService {
  private dataObs$ = new ReplaySubject(1);
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.getData(`/users`);
  }



  //CACHE METHOD
  getData(url: string, forceRefresh?: boolean) {
    // If the Subject was NOT subscribed before OR if forceRefresh is requested
    if (!this.dataObs$.observers.length || forceRefresh) {
      this.http.get(url).subscribe(
        data => this.dataObs$.next(data),
        error => {
          this.dataObs$.error(error);
          // Recreate the Observable as after Error we cannot emit data anymore
          this.dataObs$ = new ReplaySubject(1);
        }
      );
    }
    return this.dataObs$;
  }
}
