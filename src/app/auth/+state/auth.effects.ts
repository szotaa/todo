import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {exhaustMap, tap} from 'rxjs/operators';
import {AuthActions, AuthActionTypes} from './auth.actions';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable()
export class AuthEffects {

  @Effect()
  loginAttempt = this.actions$.pipe(
    ofType(AuthActionTypes.LoginAttempt),
    exhaustMap(action => this.fireAuth.auth.signInWithEmailAndPassword(action.loginRequest.username, action.loginRequest.password)))
    .pipe(tap(response => console.log(response.user)));


  constructor(
    private actions$: Actions<AuthActions>,
    private fireAuth: AngularFireAuth
  ) {}

}
