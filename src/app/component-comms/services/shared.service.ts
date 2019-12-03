import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class SharedService {
  private messageSource = new BehaviorSubject<string[]>([]);
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string[]) {
    this.messageSource.next(message);
    console.log(message);
  }
}
