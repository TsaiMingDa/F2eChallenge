import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  animalType = 'dog';
  roleImg = {
    // tslint:disable-next-line:max-line-length
    dog: [{src: './assets/images/d1.png', active: false}, {src: './assets/images/d2.png', active: false}, {src: './assets/images/d3.png', active: false}, {src: './assets/images/d4.png', active: false}],
    // tslint:disable-next-line:max-line-length
    cat: [{src: './assets/images/c1.png', active: false}, {src: './assets/images/c2.png', active: false}, {src: './assets/images/c3.png', active: false}, {src: './assets/images/c4.png', active: false}]
  };
  activeImg = this.roleImg.dog[0].src;
  constructor() { }

  ngOnInit() {
  }
  changeImg(e, idx) {
    this.activeImg = this.roleImg[this.animalType][idx].src;
    this.roleImg[this.animalType].forEach( el => {
      el.active = false;
    });
    this.roleImg[this.animalType][idx].active = true;
  }

}
