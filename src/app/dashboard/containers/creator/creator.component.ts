import {Component} from '@angular/core';
import {TodoItem} from '../../models/todo.item';
import * as fromDashboard from '../../+state/dashboard.reducers';
import {Store} from '@ngrx/store';
import {New} from '../../+state/dashboard.actions';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html'
})
export class CreatorComponent {

  constructor(
    private store: Store<fromDashboard.State>
  ) { }

  catch(todoItem: TodoItem): void {
    this.store.dispatch(new New( todoItem));
  }
}
