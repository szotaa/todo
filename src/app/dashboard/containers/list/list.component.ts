import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../models/todo.item';
import {Store} from '@ngrx/store';
import {QueryTodoItems} from '../../+state/dashboard.actions';
import {Observable} from 'rxjs';
import * as fromDashboard from '../../+state/dashboard.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoItems: Observable<TodoItem[]>;

  constructor(private store: Store<fromDashboard.State>) { }

  ngOnInit() {
    this.todoItems = this.store.select(fromDashboard.selectAll);
    this.store.dispatch(new QueryTodoItems());
  }
}
