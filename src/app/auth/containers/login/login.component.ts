import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginRequest} from '../../models/login.request';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../+state/auth.reducers';
import {LoginAttempt} from '../../+state/auth.actions';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnDestroy {

  queryParamsSubscription: Subscription;
  wasRedirectedFromRegister: boolean;
  didLoginFail: boolean;

  constructor(
    private store: Store<fromAuth.State>,
    private activatedRoute: ActivatedRoute
  ) {
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe( params => {
        const registered = params.registered;
        const error = params.error;
        if (registered) {
          this.wasRedirectedFromRegister = true;
        }

        if (error) {
          this.didLoginFail = true;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  catch(loginRequest: LoginRequest) {
    this.store.dispatch(new LoginAttempt(loginRequest));
  }
}
