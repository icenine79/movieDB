import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserDetailComponent } from 'src/app/admin/components/user-detail/user-detail.component';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let location: Location;
  let router: Router;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, UserDetailComponent],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([
        {
          path: 'detail/:id',
          component: UserDetailComponent
        }],
      )],
      providers: [UserService, AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AdminComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('sould render administrator username', fakeAsync(() => {

    component.currentUser = {
      id: '',
      userName: '',
      password: '',
      firstName: '',
      lastName: ''
    };
    fixture.detectChanges();
    let de = debugElement.query(By.css('.list'))
    let el: HTMLElement = de.nativeElement;
    

    expect(el.innerText).toContain('Admin username');


  }));

 

  it('test demands redirection', fakeAsync(() => {
    component.users = [{
      id: '',
      userName: '',
      password: '',
      firstName: '',
      lastName: ''
    }
    ];
    fixture.detectChanges();

    debugElement
      .query(By.css('.test-link'))
      .nativeElement.click();

    expect(location.path()).toBe('/detail/1');


  }));





});
