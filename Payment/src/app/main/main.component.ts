import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  payment = {
    credit: true,
    web: false,
    real: false
  };
  constructor() { }

  showContent(pay) {
    // tslint:disable-next-line:forin
    for (const key in this.payment) {
      if (key === pay) {
        this.payment[key] = true;
      } else {
        this.payment[key] = false;
      }
    }
  }
  ngOnInit() {
  }

}
