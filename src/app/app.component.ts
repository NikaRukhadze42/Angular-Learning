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
  title = 'Angular-First-Pet-Project';
  Users: User[] = [
    { Id: '1', Name: 'Nika', LastName: 'Rukhadze'},
    { Id: '2', Name: 'Elisabed', LastName: 'Tushka'},
    { Id: '3', Name: 'Bachana', LastName: 'Yoriauli'},
    { Id: '4', Name: 'Lela', LastName: 'Yoriauli'}
  ]
}
