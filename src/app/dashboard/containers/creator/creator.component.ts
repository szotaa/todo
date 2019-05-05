import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../models/todo.item';
import * as fromDashboard from '../../+state/dashboard.reducers';
import {Store} from '@ngrx/store';
import {New} from '../../+state/dashboard.actions';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  constructor(
    private store: Store<fromDashboard.State>
  ) { }

  ngOnInit() {
  }

  catch(todoItem: TodoItem): void {
    this.store.dispatch(new New( todoItem));
  }
}
