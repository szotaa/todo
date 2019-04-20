import { Action } from '@ngrx/store';
import {LoginRequest} from '../models/login.request';
import {RegisterRequest} from '../models/register.request';

export enum AuthActionTypes {
  LoginAttempt = '[Login] Login Attempt',
  RegisterAttempt = '[Register] Register Attempt',

}

export class LoginAttempt implements Action {
  readonly type = AuthActionTypes.LoginAttempt;
  constructor(public loginRequest: LoginRequest) {}
}

export class RegisterAttempt implements Action {
  readonly type = AuthActionTypes.RegisterAttempt;
  constructor(public registerRequest: RegisterRequest) {}
}

export type AuthActions = LoginAttempt | RegisterAttempt;
