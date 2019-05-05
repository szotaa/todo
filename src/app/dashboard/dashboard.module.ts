import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CreatorUiComponent} from './components/creator-ui/creator-ui.component';
import {CreatorComponent} from './containers/creator/creator.component';
import {ListUiComponent} from './components/list-ui/list-ui.component';
import {ListComponent} from './containers/list/list.component';
import {StoreModule} from '@ngrx/store';
import * as fromDashboard from './+state/dashboard.reducers';
import {EffectsModule} from '@ngrx/effects';
import {DashboardEffects} from './+state/dashboard.effects';
import {ItemUiComponent} from './components/item-ui/item-ui.component';
import {ItemComponent} from './containers/item/item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [DashboardComponent, CreatorUiComponent, CreatorComponent, ListUiComponent, ListComponent, ItemUiComponent, ItemComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('dashboard', fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
