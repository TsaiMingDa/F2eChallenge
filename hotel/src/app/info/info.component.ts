import { Component, OnInit } from '@angular/core';
import { HouseDataService } from '../house-data.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {
  roomId = '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu';
  constructor(private houseDataService: HouseDataService) { }

  ngOnInit() {

  }
  get roomList() {
    const roomList = this.houseDataService.roomList[this.roomId];
    return roomList !== undefined ? roomList : false;
  }
}
