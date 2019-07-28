import { Component } from '@angular/core';
import { cards } from '../assets/cards';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FreeCell';
  initCards;
  containers = [];
  dragContaninersIndex;
  dragCardIndex;
  dropContaninersIndex;
  dropCardIndex;
  leftContainers = [[], [], [], []];
  rightContainersType = ['S', 'H', 'D', 'C'];
  rightContainers = [[], [], [], []];
  fromPosition;
  initCardsRecord;
  cardRecord;
  showInfo = false;
  min = 0;
  minTxt = '00';
  sec = 0;
  secTxt = '00';
  timer;
  constructor() {
    this.newGame();
  }
  shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = array[randomIndex];
      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
    }
    return array;
  }
  assignmentCards() {
    const initCardsLength = this.initCards.length;
    if (initCardsLength > 24) {
      this.containers.push(this.initCards.splice(0, 7));
    }
    if (initCardsLength <= 24 && initCardsLength > 0) {
      this.containers.push(this.initCards.splice(0, 6));
    }
    if (initCardsLength <= 0) {
      this.lateCardDrag();
      return;
    }
    this.assignmentCards();
  }
  lateCardDrag() {
    this.containers.forEach((item) => {
      const itemLength = item.length;
      item[itemLength - 1].dragable = true;
    });
  }
  cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  drag(e, from) {
    if (e.target.getAttribute('draggable') === 'false') {
      return false;
    }
    this.fromPosition = from;
    this.dragContaninersIndex = e.target.getAttribute('data-containers-id');
    this.dragCardIndex = e.target.getAttribute('data-card-id');
    // console.log('drag =>' , this.dragContaninersIndex, this.dragCardIndex);
  }
  drop(e, type) {

    this.cancelDefault(e);
    const dropContainer = e.target;
    if (type === 'left' && dropContainer.classList.contains('card')) {
      return;
    }
    this.dropContaninersIndex = dropContainer.getAttribute('data-containers-id');
    this.dropCardIndex = dropContainer.getAttribute('data-card-id');

    // 刪除drag的card
    // tslint:disable-next-line:max-line-length
    const cardMoved = this.fromPosition === 'fromLeft' ? this.leftContainers[this.dragContaninersIndex].slice(0, 1) : this.containers[this.dragContaninersIndex].slice(this.dragCardIndex, this.dragCardIndex + 1);

    // 先取消dragable，如果是左上的牌就不需要取消
    if (type === 'left') {
      this.containers[this.dragContaninersIndex].splice(this.dragCardIndex, 1);
      this.leftContainers[this.dropContaninersIndex].push(cardMoved[0]); // 改成left contain
    } else if (this.fromPosition === 'fromLeft' && type !== 'right') {
      if (this.rule(cardMoved[0])) {
        this.leftContainers[this.dragContaninersIndex].splice(0, 1);
        this.containers[this.dropContaninersIndex].push(cardMoved[0]);
      }
    } else if (type === 'right') {
      if (this.winnerRule(cardMoved[0])) {
        if (this.fromPosition === 'fromLeft') {
          console.log(97);
          this.leftContainers[this.dragContaninersIndex].splice(0, 1);
        }
        if (this.fromPosition === 'fromDown') {
          console.log(101);
          this.containers[this.dragContaninersIndex].splice(this.dragCardIndex, 1);
        }
        this.rightContainers[this.dropContaninersIndex].push(cardMoved[0]);
        console.log(this.rightContainers);
      } else {
        //
      }
    } else {
      if (this.rule(cardMoved[0])) {
        cardMoved.dragable = false;
        // drop加入刪除的card
        this.containers[this.dragContaninersIndex].splice(this.dragCardIndex, 1);
        this.containers[this.dropContaninersIndex].push(cardMoved[0]);
      }
    }
    // 讓down的最後一張牌可以drag
    this.lateCardDrag();
  }
  rule(cardMoving) {
    const cardDroped = this.containers[this.dropContaninersIndex][this.dropCardIndex];
    // S黑桃 H愛心 D方塊 C梅花
    const cardMovingColor = cardMoving.type === 'S' || cardMoving.type === 'C' ? 'black' : 'red';
    const cardDropedColor = cardDroped.type === 'S' || cardMoving.type === 'C' ? 'black' : 'red';
    if (cardDroped.number - cardMoving.number === 1 && cardMovingColor !== cardDropedColor) {
      return true;
    } else {
      return false;
    }
  }
  winnerRule(cardMoving) {
    const cardDropedType = this.rightContainersType[this.dropContaninersIndex];
    const cardDropedLength = this.rightContainers[this.dropContaninersIndex].length;

    const cardDroped = cardDropedLength === 0 ? {number: 0} : this.rightContainers[this.dropContaninersIndex][cardDropedLength - 1];
    console.log( cardDroped);
    // tslint:disable-next-line:max-line-length
    if (cardMoving.type === cardDropedType && cardMoving.number - cardDroped.number === 1) {
      return true;
    } else {
      return false;
    }
  }
  newGame() {
    this.startTime();
    this.resetTable();
    this.cardRecord = cards.slice(0);
    this.initCards = this.shuffle(this.cardRecord );
    this.initCardsRecord = this.initCards.slice(0);
    this.assignmentCards();
  }
  restart() {
    this.initCards = this.initCardsRecord.slice(0);
    this.startTime();
    this.resetTable();
    this.assignmentCards();
  }
  resetTable() {
    this.containers = [];
    this.leftContainers = [[], [], [], []];
    this.rightContainers = [[], [], [], []];
  }
  startTime() {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
      this.sec = this.min = 0;
      this.minTxt = this.secTxt = '00';
    }
    this.timer = setInterval(() => {
      this.sec = this.sec + 1;
      if (this.sec < 10) {
        this.secTxt = `0${this.sec}`;
      } else if (this.sec > 59) {
        this.sec = 0;
        this.secTxt = '00';
        this.min = this.min + 1;
      } else {
        this.secTxt = `${this.sec}`;
      }

      if (this.min < 10) {
        this.minTxt = `0${this.min}`;
      }
    }, 1000);
  }
}
