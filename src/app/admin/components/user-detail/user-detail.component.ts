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
  user: any;
  public users = { name: "Izzat Nadiri", age: 26 };
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: NgbModal
  ) {}

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
    this.userService.deleteUser(this.user.id).subscribe(() => {
      this.location.back();
    });
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.users = this.users;
    modalRef.result.then(result => {
      if (result) {
        console.log(result);
      }
    });





  }
}
