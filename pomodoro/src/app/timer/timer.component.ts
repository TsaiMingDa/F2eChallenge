import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  start = false;
  animationClass = true;
  status = 'doing';
  rest = false;
  constructor(private timeService: TimerService) { }
  ngOnInit() {
  }
  startTime() {
    this.start = !this.start;
    this.timeService.timeStart();
  }
  stopTime() {
    if (!this.start) {
      return;
    }
    if (this.status === 'doing') {
      this.status = 'rest';
      this.timeService.timerStop('rest');
    } else if (this.status === 'rest') {
      this.status = 'doing';
      this.timeService.timerStop('doing');
    }
    this.start = !this.start;

    this.animationClass = false;
    setTimeout( () => {
      this.animationClass = true;
    });

  }
}
