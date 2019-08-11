import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }

}
