import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
/* import { faFilm } from '@fortawesome/free-solid-svg-icons';
 */
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
@Input('user') users:User[]

  constructor() { }

  ngOnInit() {
  }

}
