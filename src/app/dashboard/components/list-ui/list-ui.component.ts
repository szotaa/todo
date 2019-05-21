import {Component, Input} from '@angular/core';
import {TodoItem} from '../../models/todo.item';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-ui',
  templateUrl: './list-ui.component.html'
})
export class ListUiComponent {

  @Input()
  items: Observable<TodoItem[]>;
}
