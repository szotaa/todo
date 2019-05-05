import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../../models/todo.item';

@Component({
  selector: 'app-item-ui',
  templateUrl: './item-ui.component.html',
  styleUrls: ['./item-ui.component.scss']
})
export class ItemUiComponent implements OnInit {

  @Input()
  todoItem: TodoItem;

  @Output()
  deleteEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  delete(): void {
    this.deleteEmitter.emit(this.todoItem.id);
  }
}
