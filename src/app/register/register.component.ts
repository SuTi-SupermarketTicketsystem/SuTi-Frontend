import { Component, Input, OnInit, Output } from '@angular/core';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  faUser = faUser;
  faLockOpen = faLockOpen;
  faMail = faEnvelope;
  pw1Value = '';
  @Input() isValid = false;
  pw2Value = '';
  emailValue = '';
  userNameValue = '';
  @Input() pwEqual = true;

  @Output() set pw1(value: string) {
    this.pw1Value = value;
    this.CheckIsValid();
  }

  @Output() set pw2(value: string) {
    this.pw2Value = value;
    this.CheckIsValid();
  }

  @Output() set email(value: string) {
    this.emailValue = value;
    this.CheckIsValid();
  }

  @Output() set userName(value: string) {
    this.userNameValue = value;
    this.CheckIsValid();
  }

  constructor() { }

  public submit(): void {
    console.log('- - - register - - -');
    console.log(this.userNameValue);
    console.log(this.emailValue);
    console.log(this.pw1Value);
  }

  ngOnInit(): void {
  }

  private CheckIsValid(): void {
    this.isValid = (this.pw1Value === this.pw2Value && this.pw1Value !== '' && this.emailValue !== '' && this.userNameValue !== '');
    this.pwEqual = this.pw1Value === '' || this.pw2Value === '' || this.pw1Value === this.pw2Value;
  }

}
