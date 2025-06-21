import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  AllowNewServer = true;
  ServerCreate = 'no server was created';
  ServerName = '';

  constructor() { 
    setTimeout ( () => {
      this.AllowNewServer = false;
    }, 2000)
  }

  AddServer() {

  }

  ngOnInit(): void {
  }

  OnServerCreate()
  {
    this.ServerCreate = `${this.ServerName} was created!`;
  }

  UpdateServerName(event: any)
  {
    this.ServerName = event.target.value;
  }

}