import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faLockOpen = faLockOpen;

  constructor() { }

  ngOnInit(): void {
  }

}
