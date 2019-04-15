import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginRequest} from '../../models/login-request';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss']
})
export class LoginUiComponent implements OnInit {

  @Output()
  formValueEmitter = new EventEmitter<LoginRequest>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm: LoginRequest): void {
    this.formValueEmitter.emit(loginForm);
  }
}
