import {TodoItem} from '../models/todo.item';
import {DashboardActions, DashboardActionTypes} from './dashboard.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';

export interface State extends EntityState<TodoItem> {
}

export const todoItemAdapter = createEntityAdapter<TodoItem>();

export const initialState: State = todoItemAdapter.getInitialState();

export function reducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {

    case DashboardActionTypes.ADDED:
      return todoItemAdapter.addOne(action.payload, state);

    case DashboardActionTypes.MODIFIED:
      console.log(action);
      return todoItemAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);

      default:
        return state;
  }
}

export const getTodoItemsState = createFeatureSelector<State>('dashboard');

export const {
  selectIds,
  selectAll
} = todoItemAdapter.getSelectors(getTodoItemsState);
