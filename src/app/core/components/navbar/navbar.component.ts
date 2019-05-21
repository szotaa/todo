import {Component, OnInit} from '@angular/core';
import * as fromCore from '../../+state/session.reducers';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isAuthenticated: Observable<boolean>;

  constructor(private coreState: Store<fromCore.State>) {}

  ngOnInit() {
    this.isAuthenticated = this.coreState.select('session').pipe(
      map(session => {
        // @ts-ignore
        if (session.session) {
          return  true;
        } else {
          return  false;
        }
      })
    );
  }

}
