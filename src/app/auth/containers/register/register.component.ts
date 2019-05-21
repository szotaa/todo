import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../+state/auth.reducers';
import {RegisterRequest} from '../../models/register.request';
import {RegisterAttempt} from '../../+state/auth.actions';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnDestroy {

  didRegistrationFail: boolean;
  queryParamsSubscription: Subscription;

  constructor(
    private store: Store<fromAuth.State>,
    private activatedRoute: ActivatedRoute
  ) {
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe( params => {
      const error = params.error;
      if (error) {
        this.didRegistrationFail = true;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }


  catch(registerRequest: RegisterRequest): void {
    this.store.dispatch(new RegisterAttempt(registerRequest));
  }
}
