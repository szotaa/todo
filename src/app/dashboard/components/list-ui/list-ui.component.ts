import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../../models/todo.item';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-ui',
  templateUrl: './list-ui.component.html',
  styleUrls: ['./list-ui.component.scss']
})
export class ListUiComponent implements OnInit {

  @Input()
  items: Observable<TodoItem[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
