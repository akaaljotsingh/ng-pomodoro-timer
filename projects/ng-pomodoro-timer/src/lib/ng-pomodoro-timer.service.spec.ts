import { TestBed } from '@angular/core/testing';

import { NgPomodoroTimerService } from './ng-pomodoro-timer.service';

describe('NgPomodoroTimerService', () => {
  let service: NgPomodoroTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPomodoroTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
