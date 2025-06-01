import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public text: string = 'rame texti';

  @Input() TextFromOtherComponent: string;

  constructor() { }

  ngOnInit(): void {
  }

}
