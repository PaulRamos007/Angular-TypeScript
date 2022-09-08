import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox-events',
  templateUrl: './textbox-events.component.html',
  styleUrls: ['./textbox-events.component.css'],
})
export class TextboxEventsComponent implements OnInit {
  constructor() {}

  keyUpMessage: string;
  keyCode: string;
  keyUpMessageInputAsVariable: string;
  keyEnterMessage: string;
  onLeaveValue: string;

  ngOnInit(): void {}

  onKeyUp(event: any): void {
    console.log(event);
    this.keyUpMessage = event.key;
    this.keyCode = event.keyCode;
  }

  onKeyUpInputAsVariable(value: any) {
    this.keyUpMessageInputAsVariable = value;
  }

  onEnter(value: any) {
    this.keyEnterMessage = value;
  }

  onLeave(value: any) {
    this.onLeaveValue = value;
  }
}
