import {Action} from '@ngrx/store';
import {Session} from '../models/session';

export enum SessionActionTypes {
  SetSession = '[Session] Set Session'
}

export class SetSession implements Action {
  readonly type = SessionActionTypes.SetSession;
  constructor(public payload: Session) {}
}

export type SessionActions = SetSession;
