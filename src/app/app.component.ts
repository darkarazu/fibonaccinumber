import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { fadeIn, fadeOut } from './animations/fade.animation';
import { SessionService } from './services/session.service';

@Component({
  selector: 'fibo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class AppComponent implements OnInit {
  title = 'fibonaccicalculator';
  username = '';
  guestname = '';
  editingUsername = false;

  constructor(private _sessionService: SessionService) {

  }

  ngOnInit() {
    this.guestname = this.username = 'Guest' + Guid.create().toString().substring(0, 6);
    this.setUsername();
  }

  toggleEditUsername() {
    this.editingUsername = !this.editingUsername;
  }

  setUsername() {
    this._sessionService.setUsername(this.username);
  }

  checkUsername() {
    if ( this.username === '' || this.username === undefined || this.username === null ) {
      this.username = this.guestname;
    }
  }
}
