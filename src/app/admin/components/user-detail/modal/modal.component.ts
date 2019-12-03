import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input() public users;
constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {
    console.log(this.users);
  }

  passBack() {this.activeModal.close(this.users);}
}
