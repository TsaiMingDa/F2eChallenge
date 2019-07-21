import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timer;
  min = 25;
  minTxt = '25';
  sec = 0;
  secTxt = '00';
  constructor() { }

  timeStart() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.timeSet();
      }, 1000);
    } else {
      this.cancelTimer();
    }
  }
  cancelTimer() {
    clearInterval(this.timer);
    this.timer = false;
  }
  timeSet() {
    if (this.sec === 0 && this.min > 0 ) {
      this.min = this.min - 1;
    }
    this.minTxt = this.min < 10 ? `0${this.min}` : this.min.toString();
    this.sec = this.sec === 0 ? this.sec = 59 : this.sec - 1;
    this.secTxt = this.sec === 0 ? '00' : this.sec < 0 ? '59' : this.sec < 10 ? `0${this.sec}` : this.sec.toString();
  }
  timeReset(type) {
    if(type === 'rest') {
      this.sec = 0;
      this.secTxt = '00';
      this.min = 5;
      this.minTxt = '05';
      return;
    }
    if (type === 'doing') {
      this.sec = 0;
      this.secTxt = '00';
      this.min = 25;
      this.minTxt = '25';
    }
  }
  timerStop(type) {
    this.cancelTimer();
    this.timeReset(type);
  }
}
