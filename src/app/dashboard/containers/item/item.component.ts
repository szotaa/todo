import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../../models/todo.item';
import * as fromDashboard from '../../+state/dashboard.reducers';
import {Store} from '@ngrx/store';
import {RemoveTodoItem} from '../../+state/dashboard.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: TodoItem;

  constructor(private store: Store<fromDashboard.State>) { }

  ngOnInit() {
  }

  delete(id: string): void {
    this.store.dispatch(new RemoveTodoItem(id));
  }
}
