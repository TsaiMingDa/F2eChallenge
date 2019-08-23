import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HouseDataService {
  header = new HttpHeaders({
    Accept: 'application/json',
    Authorization: 'Bearer pWbGEL48td3O2iexxTlpB86lo2nt0YHxXHeMjIXfpIEQAaxogDCgd9lkzJuK'
  });
  roomList = {};
  constructor(private httpClient: HttpClient) { }

  roomDetail(id) {
    const url = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`;
    this.httpClient.get(url, {headers: this.header}).subscribe(res => {
      this.roomList[res['room'][0].id] = res['room'][0];
    });
  }
}
