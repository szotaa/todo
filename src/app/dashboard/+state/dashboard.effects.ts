import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {DashboardActions, DashboardActionTypes, New} from './dashboard.actions';
import {exhaustMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {TodoItem} from '../models/todo.item';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable()
export class DashboardEffects {

  @Effect()
  query = this.actions$.pipe(
    ofType(DashboardActionTypes.QUERY),
    switchMap(() => this.db.collection<TodoItem>('todo-items').stateChanges()),
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
    switchMap(data => {
      console.log(data);
      const ref = this.db.doc<TodoItem>(`todo-items/${data.id}`);
      return fromPromise(ref.update(data.changes));
    }),
    map(() => DashboardActionTypes.SUCCESS)
  );

  @Effect({dispatch: false})
  new = this.actions$.pipe(
    ofType(DashboardActionTypes.NEW),
    exhaustMap(action => fromPromise(this.db.collection('todo-items').add(action.payload))),
  );

  constructor(
    private actions$: Actions<DashboardActions>,
    private db: AngularFirestore
  ) {}
}
