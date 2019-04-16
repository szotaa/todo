import { Action } from '@ngrx/store';
import {LoginRequest} from '../models/login-request';

export enum AuthActionTypes {
  LoginAttempt = '[Login] Login Attempt',


}

export class LoginAttempt implements Action {
  readonly type = AuthActionTypes.LoginAttempt;
  constructor(public loginRequest: LoginRequest) {}
}


export type AuthActions = LoginAttempt;
