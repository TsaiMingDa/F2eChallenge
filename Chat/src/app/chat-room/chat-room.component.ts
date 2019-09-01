import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  chatContent = [
    {icon: './assets/images/dh1.png', name: '煞氣a仔仔', content: '安安，萬華彭于晏～哪裡人？萬華彭于晏是真的嗎？'},
    // tslint:disable-next-line:max-line-length
    {icon: './assets/images/ch2.png', name: '小貓咪', content: '美中貿易戰再升級，中國大陸23日宣布對750億美元 進口美國商品分批加徵關稅後，美國總統川普隨即 「命令」美企撤出中國大陸，並將大陸國家主席習 近平稱為「敵人」，更表示要將總值約5,500億美元 大陸輸美商品加徵關稅的稅率，分批提升5個百分點'},
    {icon: './assets/images/ch1.png', name: '我4老大', content: '安安，萬華彭于晏～真的～～好深奧～～～～～～～～'},
    {icon: './assets/images/ch3.png', name: '我是喵喵喵', content: '安安，萬華彭于晏～很高興認識你～'},
  ];
  meChatContent = [];
  newMessage;
  @ViewChild('chatBox', {static: false}) cb: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  send() {
    this.meChatContent.push({icon: './assets/images/ch3.png', name: '我是喵喵喵', content: this.newMessage});
    this.cb.nativeElement.scrollTop = this.cb.nativeElement.scrollTop + 120;
  }

}
