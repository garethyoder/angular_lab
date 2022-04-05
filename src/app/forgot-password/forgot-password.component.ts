import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  userId: string | undefined

  @Output()
  generatedPassword = new EventEmitter<string>();

  generateNewPassword() {
    let newPassword = Math.random().toString(36).slice(-8);
    console.log(newPassword)
    this.generatedPassword.emit(newPassword)
  }
}
