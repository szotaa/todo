import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, switchMap, tap} from 'rxjs/operators';
import {AuthActions, AuthActionTypes, LoginFailure, LoginSuccess, RegisterFailure, RegisterSuccess} from './auth.actions';
import {AngularFireAuth} from '@angular/fire/auth';
import {of} from 'rxjs/internal/observable/of';
import {Router} from '@angular/router';
import {fromPromise} from 'rxjs/internal-compatibility';
import {SetSession} from '../../core/+state/session.actions';
import {Session} from '../../core/models/session';
import UserCredential = firebase.auth.UserCredential;


@Injectable()
export class AuthEffects {

  @Effect()
  loginAttempt = this.actions$.pipe(
    ofType(AuthActionTypes.LoginAttempt),
    exhaustMap(action =>
      fromPromise(this.fireAuth.auth.signInWithEmailAndPassword(action.loginRequest.username, action.loginRequest.password)).pipe(
        switchMap((response: UserCredential) => of(new LoginSuccess(response.user))),
        catchError(() => of(new LoginFailure()))
      ))
  );

  @Effect()
  loginSuccess = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    exhaustMap(action => of(new SetSession(new Session(action.user)))),
    tap(() => this.router.navigate(['/dashboard'])),
  );

  @Effect({dispatch: false})
  loginFailure = this.actions$.pipe(
    ofType(AuthActionTypes.LoginFailure),
    tap(() => this.router.navigate(['/login'], {queryParams: {error: true}}))
  );

  @Effect()
  registerAttempt = this.actions$.pipe(
    ofType(AuthActionTypes.RegisterAttempt),
    exhaustMap(action =>
      of(this.fireAuth.auth.createUserWithEmailAndPassword(action.registerRequest.email, action.registerRequest.password)).pipe(
        switchMap(() => of(new RegisterSuccess())),
        catchError(() => of(new RegisterFailure()))
  )));

  @Effect({dispatch: false})
  registerSuccess = this.actions$.pipe(
    ofType(AuthActionTypes.RegisterSuccess),
    tap(() => this.router.navigate(['/login'], {queryParams: {registered: true}}))
  );

  @Effect({dispatch: false})
  registerFailure = this.actions$.pipe(
    ofType(AuthActionTypes.RegisterFailure),
    tap(() => this.router.navigate(['/register'], {queryParams: {error: true}}))
  );

  constructor(
    private actions$: Actions<AuthActions>,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {}

}
