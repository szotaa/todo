import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginUiComponent} from './components/login-ui/login-ui.component';
import {LoginComponent} from './containers/login/login.component';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './+state/auth.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './+state/auth.effects';
import {RegisterUiComponent} from './components/register-ui/register-ui.component';
import {RegisterComponent} from './containers/register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoginUiComponent,
    LoginComponent,
    RegisterUiComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthGuard]
})
export class AuthModule { }
