import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
   /*  this.sharedService.currentUsers.subscribe(message => {
      this.message = message
    console.log(message)
    }) */
  }

  onChange(value: any) {
    console.log(value);
  }
}
