import { Component } from '@angular/core';

interface User {
  Id: string;
  Name: string;
  LastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showDetails = false;
  TimeStampLogs = [];

  onButtonClick(event: any)
  {
    this.showDetails = !this.showDetails;
    this.TimeStampLogs.push(event.timeStamp)
  }
}