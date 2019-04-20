import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../+state/auth.reducers';
import {RegisterRequest} from '../../models/register.request';
import {RegisterAttempt} from '../../+state/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private store: Store<fromAuth.State>
  ) { }

  ngOnInit() {
  }

  catch(registerRequest: RegisterRequest): void {
    this.store.dispatch(new RegisterAttempt(registerRequest));
  }
}
