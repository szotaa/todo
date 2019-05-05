import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthGuard} from './auth/guards/auth.guard';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]} // todo: fix routing
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
