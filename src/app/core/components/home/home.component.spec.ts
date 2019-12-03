import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../shared/services/auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[HttpClientModule, RouterTestingModule],
      providers:[UserService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

it('should render not found', ()=>{


 let de= fixture.debugElement.query(By.css(".alert-danger"));
 let el: HTMLElement= de.nativeElement;

})

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
