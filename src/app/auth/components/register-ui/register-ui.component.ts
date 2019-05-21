import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterRequest} from '../../models/register.request';

@Component({
  selector: 'app-register-ui',
  templateUrl: './register-ui.component.html'
})
export class RegisterUiComponent {

  @Output()
  formValueEmitter = new EventEmitter<RegisterRequest>();

  registerForm: FormGroup;

  @Input()
  errored: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passwords: this.formBuilder.group({
        password: ['', [Validators.required, Validators.min(5)]],
        repeatPassword: ['']
      }, {validator: [this.matchValidator]})
    });
  }

  onSubmit(): void {
    const registerRequest = this.registerForm.getRawValue();
    this.formValueEmitter.emit({email: registerRequest.email, password: registerRequest.passwords.password});
  }

  private matchValidator(group: FormGroup) {
    const password = group.controls.password;
    const repeatPassword = group.controls.repeatPassword;

    if (password.value !== repeatPassword.value) {
      repeatPassword.setErrors({mismatch: true});
    }
    return null;
  }
}
