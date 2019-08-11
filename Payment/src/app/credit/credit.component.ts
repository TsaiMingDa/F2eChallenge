import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  formData = this.fb.group({
    name: ['', [this.customNotsetValiator]],
    num1: ['', [this.customNumValiator] ],
    num2: ['', [this.customNumValiator] ],
    num3: ['', [this.customNumValiator] ],
    num4: ['', [this.customNumValiator] ],
    backN: ['', [this.customBackValiator] ],
    year: ['', [this.customYearValiator] ],
    month: ['', [this.customMonthValiator] ],
    phone: ['', [this.customNotsetValiator, this.customPhoneValiator] ]
  });

  constructor(private fb: FormBuilder, private router: Router) { }
  customNotsetValiator(control: AbstractControl) {
    if (control.value.length > 0) {
      return null;
    }
    return { invalidNotsetCode: '必填欄位' };
  }
  customPhoneValiator(control: AbstractControl) {
    const patt = new RegExp(/^09[0-9]{8}$/);
    const res = patt.test(control.value);
    console.log(control);
    if (res) {
      return null;
    }
    // this.phoneError = '';
    return { invalidPhoneCode: '手機號碼有誤' };
  }
  customNumValiator(control: AbstractControl) {
    const patt = new RegExp(/^[0-9]{4}$/);
    const res = patt.test(control.value);
    console.log(control);
    if (res) {
      return null;
    }
    return { invalidNumCode: '號碼有誤' };
  }
  customMonthValiator(control: AbstractControl) {
    const patt = new RegExp(/^[0-9]{2}$/);
    const v = control.value;
    const res = patt.test(v);
    if (res && v <= 12 && v > 0) {
      return null;
    }
    return { invalidMCode: '號碼有誤' };
  }
  customYearValiator(control: AbstractControl) {
    const patt = new RegExp(/^[0-9]{2}$/);
    const v = control.value;
    const res = patt.test(v);
    if (res && v <= 24 && v >= 0) {
      return null;
    }
    return { invalidYCode: '號碼有誤' };
  }
  customBackValiator(control: AbstractControl) {
    const patt = new RegExp(/^[0-9]{3}$/);
    const v = control.value;
    const res = patt.test(v);
    if (res) {
      return null;
    }
    return { invalidBCode: '號碼有誤' };
  }
  submit() {
    console.log();
    if (!this.formData.invalid) {
      this.router.navigate(['/thankYouPage']);
    }
  }
  ngOnInit() {
  }

}
