import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginUiComponent} from './components/login-ui/login-ui.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './containers/login/login.component';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './+state/auth.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './+state/auth.effects';

@NgModule({
  declarations: [
    LoginUiComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
