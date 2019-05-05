import {AuthActions, AuthActionTypes} from './auth.actions';
import {User} from 'firebase';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';

export interface State extends EntityState<User> {
}

export const userAdapter = createEntityAdapter<User>({
  selectId: model => model.uid
});

export const initialState: State = userAdapter.getInitialState();

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return userAdapter.addOne(action.user, state);

    default:
      return state;
  }
}

export const getUserState = createFeatureSelector<State>('auth');

export const {
  selectAll
} = userAdapter.getSelectors(getUserState);
