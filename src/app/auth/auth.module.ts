import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginUiComponent} from './components/login-ui/login-ui.component';
import {LoginComponent} from './containers/login/login.component';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './+state/auth.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './+state/auth.effects';
import {RegisterUiComponent} from './components/register-ui/register-ui.component';
import {RegisterComponent} from './containers/register/register.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginUiComponent,
    LoginComponent,
    RegisterUiComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
