import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../models/todo.item';

@Component({
  selector: 'app-item-ui',
  templateUrl: './item-ui.component.html'
})
export class ItemUiComponent {

  @Input()
  todoItem: TodoItem;

  @Output()
  deleteEmitter = new EventEmitter<string>();

  delete(): void {
    this.deleteEmitter.emit(this.todoItem.id);
  }
}
