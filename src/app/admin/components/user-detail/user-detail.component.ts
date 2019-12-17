import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { User } from '../../../shared/models/user';
import { ModalComponent } from './modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  public user: any;
  id: string;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          let id = params.get("id");
          return this.userService.getUser(id);
        })
      )
      .subscribe(user => {
        this.user = user;
      });
  }

  deleteUser() {
    this.userService.deleteUser(this.id).subscribe(() => {
      this.location.back();
    });
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.id = receivedEntry.id;
      this.deleteUser();
    })



  }
}
