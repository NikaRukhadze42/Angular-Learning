import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public text: string = 'rame texti';

  @Input() TextFromOtherComponent: string;
  @Output() SendDataFromChild: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendDataFromChild()
  {
    this.SendDataFromChild.emit('გაგზავნილია');
  }

}