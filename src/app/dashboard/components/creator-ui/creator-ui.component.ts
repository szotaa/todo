import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoItem} from '../../models/todo.item';

@Component({
  selector: 'app-creator-ui',
  templateUrl: './creator-ui.component.html',
  styleUrls: ['./creator-ui.component.scss']
})
export class CreatorUiComponent implements OnInit {

  @Output()
  todoItemEmitter = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(todoItem: TodoItem): void {
    this.todoItemEmitter.emit(todoItem);
  }
}
