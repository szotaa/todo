import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {DashboardActions, DashboardActionTypes} from './dashboard.actions';
import {exhaustMap, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {TodoItem} from '../models/todo.item';
import {fromPromise} from 'rxjs/internal-compatibility';
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

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DashboardActionTypes.UPDATE),
    withLatestFrom(this.store),
    switchMap(([action, storeState]) => {
      // @ts-ignore
      const id = storeState.session.session.id;
      const ref = this.db.doc<TodoItem>(`todo-items/${id}/items/${action.id}`);
      return fromPromise(ref.update(action.changes));
    }),
    map(() => DashboardActionTypes.SUCCESS)
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
