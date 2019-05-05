import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import * as fromSession from './core/+state/session.reducers';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    AngularFireAuthModule,
    StoreModule.forRoot({session: fromSession.reducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 250
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
