import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {DashboardActions, DashboardActionTypes} from './dashboard.actions';
import {exhaustMap, map, mergeMap, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {TodoItem} from '../models/todo.item';
import {Store} from '@ngrx/store';
import * as fromSession from '../../core/+state/session.reducers';

@Injectable()
export class DashboardEffects {

  @Effect()
  query = this.actions$.pipe(
    ofType(DashboardActionTypes.QUERY),
    withLatestFrom(this.store),
    switchMap(([action, storeState]) => {
      // @ts-ignore
      const id = storeState.session.session.id;
      return  this.db.collection<TodoItem>('todo-items').doc(id).collection('items').stateChanges();
    }),
    mergeMap(actions => actions),
    map(action => {
      return {
          type: `[TodoItems] ${action.type}`,
          payload: {
            ...action.payload.doc.data(),
            id: action.payload.doc.id
          }
        };
      })
    );

  @Effect({dispatch: false})
  delete$ = this.actions$.pipe(
    ofType(DashboardActionTypes.REMOVED),
    withLatestFrom(this.store),
    tap(([action, storeState]) => {
      // @ts-ignore
      const id = storeState.session.session.id;
      this.db.doc<TodoItem>(`todo-items/${id}/items/${action.payload}`).delete();
    })
  );

  @Effect({dispatch: false})
  new = this.actions$.pipe(
    ofType(DashboardActionTypes.NEW),
    withLatestFrom(this.store),
    exhaustMap(([action, storeState]) => {
      // @ts-ignore
      const id = storeState.session.session.id;
      return this.db.collection('todo-items').doc(id).collection('items').add(action.payload);
    })
  );

  constructor(
    private actions$: Actions<DashboardActions>,
    private store: Store<fromSession.State>,
    private db: AngularFirestore
  ) {}
}
