import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from '../../../../shared/models/user';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input("user") public user: User;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(this.user.userName);
  }

  passBack() {
    this.passEntry.emit(this.user);
    this.activeModal.dismiss();
  }
}
