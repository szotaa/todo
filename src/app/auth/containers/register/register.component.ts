import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../+state/auth.reducers';
import {RegisterRequest} from '../../models/register.request';
import {RegisterAttempt} from '../../+state/auth.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errored: boolean;

  constructor(
    private store: Store<fromAuth.State>,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe( params => {
      const error = params.error;
      if (error) {
        this.errored = true;
        }
      }
    );
  }

  ngOnInit() {
  }

  catch(registerRequest: RegisterRequest): void {
    this.store.dispatch(new RegisterAttempt(registerRequest));
  }
}
