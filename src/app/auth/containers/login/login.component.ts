import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../models/login.request';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../+state/auth.reducers';
import {LoginAttempt} from '../../+state/auth.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registered: boolean;
  error: boolean;

  constructor(
    private store: Store<fromAuth.State>,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe( params => {
        const registered = params.registered;
        const error = params.error;
        if (registered) {
          this.registered = true;
        }

        if (error) {
          this.error = true;
        }
      }
    );
  }

  ngOnInit() {
  }

  catch(loginRequest: LoginRequest) {
    this.store.dispatch(new LoginAttempt(loginRequest));
  }
}
