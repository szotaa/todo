import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CreatorUiComponent} from './components/creator-ui/creator-ui.component';
import {CreatorComponent} from './containers/creator/creator.component';
import {ListUiComponent} from './components/list-ui/list-ui.component';
import {ListComponent} from './containers/list/list.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {StoreModule} from '@ngrx/store';
import * as fromDashboard from './+state/dashboard.reducers';
import {EffectsModule} from '@ngrx/effects';
import {DashboardEffects} from './+state/dashboard.effects';

@NgModule({
  declarations: [DashboardComponent, CreatorUiComponent, CreatorComponent, ListUiComponent, ListComponent],
  imports: [
    CoreModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
