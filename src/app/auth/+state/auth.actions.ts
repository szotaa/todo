import { Action } from '@ngrx/store';
import {LoginRequest} from '../models/login.request';
import {RegisterRequest} from '../models/register.request';

export enum AuthActionTypes {
  LoginAttempt = '[Login] Login Attempt',
  LoginSuccess = '[Login] Login Success',
  LoginFailure = '[Login] Login Failure',
  RegisterAttempt = '[Register] Register Attempt',
  RegisterSuccess = '[Register] Register Success',
  RegisterFailure = '[Register] Register Failure'
}

export class LoginAttempt implements Action {
  readonly type = AuthActionTypes.LoginAttempt;
  constructor(public loginRequest: LoginRequest) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
}

export class RegisterAttempt implements Action {
  readonly type = AuthActionTypes.RegisterAttempt;
  constructor(public registerRequest: RegisterRequest) {}
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;
}

export class RegisterFailure implements Action {
  readonly type = AuthActionTypes.RegisterFailure;
}

export type AuthActions = LoginAttempt | LoginSuccess | LoginFailure | RegisterAttempt | RegisterSuccess | RegisterFailure;
