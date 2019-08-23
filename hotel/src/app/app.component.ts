import { Component, OnInit } from '@angular/core';
import { HouseDataService } from './house-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotel';
  roomId = '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu';
  constructor(private houseDataService: HouseDataService) {}
  ngOnInit() {
    this.houseDataService.roomDetail(this.roomId);
  }

}
