import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterRequest} from '../../models/register.request';

@Component({
  selector: 'app-register-ui',
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.scss']
})
export class RegisterUiComponent implements OnInit {

  @Output()
  formValueEmitter = new EventEmitter<RegisterRequest>();

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      email: [''],
      password: [''],
      repeatPassword: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const registerRequest = this.registerForm.getRawValue() as RegisterRequest;
    this.formValueEmitter.emit(registerRequest);
  }
}
