import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginUiComponent } from './components/login-ui/login-ui.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [
    LoginUiComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
