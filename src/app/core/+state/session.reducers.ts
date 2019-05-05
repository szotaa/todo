import {Session} from '../models/session';
import {SessionActions, SessionActionTypes} from './session.actions';

export interface State {
  session: Session;
}

export const initialState: State = {
  session: null
};

export function reducer(state = initialState, action: SessionActions) {
  switch (action.type) {
    case SessionActionTypes.SetSession:
      return {
        ...state,
        session: action.payload
      };

    default:
      return state;
  }
}
