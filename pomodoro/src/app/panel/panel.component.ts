import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { TimerService } from '../timer.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @ViewChild('inputBox', {static: false}) input: ElementRef;
  constructor(private timeService: TimerService) { }
  todoList = ['THE FIRST THING TO DO TODAY'];
  ngOnInit() {
  }
  get sec() {
    return this.timeService.secTxt;
  }
  get min() {
    return this.timeService.minTxt;
  }
  get _todoList() {
    return this.todoList.length > 0 ? this.todoList : ['The first thing to do today'];
  }
  newMission(e) {
    const inputValue = (this.input.nativeElement as HTMLInputElement).value;
    this.todoList.push(inputValue);
  }
  spliceTodoList(e) {
    e.stopPropagation();
    const index = e.srcElement.dataset.index;
    this.todoList.splice(index, 1);
    console.log(this.todoList);
  }
  changeMission(e) {
    const index = e.currentTarget.getAttribute('data-index');
    const item = this.todoList[index];
    console.log(item);
    this.todoList.splice(index, 1);
    this.todoList.splice(0, 0, item);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
  }
}
