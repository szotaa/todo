import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../models/login-request';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../+state/auth.reducers';
import {LoginAttempt} from '../../+state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<fromAuth.State>
  ) { }

  ngOnInit() {
  }

  catch(loginRequest: LoginRequest) {
    this.store.dispatch(new LoginAttempt(loginRequest));
  }
}
