import { AuthActions, AuthActionTypes } from './auth.actions';
import {User} from 'firebase';

export interface State {
  user: User;
}

export const initialState: State = {
  user: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
}
