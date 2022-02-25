import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPomodoroTimerComponent } from './ng-pomodoro-timer.component';

describe('NgPomodoroTimerComponent', () => {
  let component: NgPomodoroTimerComponent;
  let fixture: ComponentFixture<NgPomodoroTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPomodoroTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPomodoroTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
