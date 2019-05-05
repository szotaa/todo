import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {HomeComponent} from './core/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
