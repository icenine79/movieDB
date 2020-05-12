import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogChildComponent } from './log-child.component';

describe('LogChildComponent', () => {
  let component: LogChildComponent;
  let fixture: ComponentFixture<LogChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
