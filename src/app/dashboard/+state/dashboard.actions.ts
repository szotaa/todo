import {Action} from '@ngrx/store';
import {TodoItem} from '../models/todo.item';

export enum DashboardActionTypes {
  QUERY = '[TodoItems] query',
  ADDED = '[TodoItems] added',
  MODIFIED = '[TodoItems] modified',
  UPDATE = '[TodoItems] update',
  SUCCESS = '[TodoItems] success',
  NEW = '[TodoItems] new'
}

export class QueryTodoItems implements Action {
  readonly type = DashboardActionTypes.QUERY;
}

export class AddedTodoItem implements Action {
  readonly type = DashboardActionTypes.ADDED;
  constructor(public payload: TodoItem) {}
}

export class ModifiedTodoItem implements Action {
  readonly type = DashboardActionTypes.MODIFIED;
  constructor(public payload: TodoItem) {}
}

export class UpdateTodoItems implements Action {
  readonly type = DashboardActionTypes.UPDATE;
  constructor(
    public id: string,
    public changes: Partial<TodoItem>) {}
}

export class New implements Action {
  readonly type = DashboardActionTypes.NEW;
  constructor(
    public payload: TodoItem
  ) {}
}

export class Success implements Action {
  readonly type = DashboardActionTypes.SUCCESS;
}


export type DashboardActions =
  QueryTodoItems |
  AddedTodoItem |
  ModifiedTodoItem |
  UpdateTodoItems |
  Success |
  New ;
