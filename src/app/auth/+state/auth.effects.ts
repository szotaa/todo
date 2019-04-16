import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {concatMap, tap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {AuthActions, AuthActionTypes} from './auth.actions';


@Injectable()
export class AuthEffects {


  @Effect()
  loginAttempt = this.actions$.pipe(
    ofType(AuthActionTypes.LoginAttempt),
    tap(action => console.log('elo', action)),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<AuthActions>) {}

}
