import { Component, OnInit } from '@angular/core';
import { HouseDataService } from '../house-data.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  roomId = '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu';
  constructor(private houseDataService: HouseDataService) { }

  ngOnInit() {

  }
  get imageList() {
    const roomList = this.houseDataService.roomList[this.roomId];
    return roomList !== undefined ? roomList.imageUrl[1] : false;
  }
}
