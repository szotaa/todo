import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginRequest} from '../../models/login.request';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html'
})
export class LoginUiComponent {

  @Input()
  registered: boolean;

  @Input()
  error: boolean;

  @Output()
  formValueEmitter = new EventEmitter<LoginRequest>();

  onSubmit(loginForm: LoginRequest): void {
    this.formValueEmitter.emit(loginForm);
  }
}
