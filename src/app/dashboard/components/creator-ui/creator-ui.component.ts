import {Component, EventEmitter, Output} from '@angular/core';
import {TodoItem} from '../../models/todo.item';

@Component({
  selector: 'app-creator-ui',
  templateUrl: './creator-ui.component.html'
})
export class CreatorUiComponent {

  @Output()
  todoItemEmitter = new EventEmitter<TodoItem>();

  onSubmit(todoItem: TodoItem): void {
    this.todoItemEmitter.emit(todoItem);
  }
}
