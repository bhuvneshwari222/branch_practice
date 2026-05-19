import { Component, Input, OnInit } from '@angular/core';
import { Itodos } from '../../materials/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() getTodosArr!: Itodos[];

  constructor() { }

  ngOnInit(): void {
  }

  trackByTodosID(index:number, todo:Itodos){
    return todo.todoID;
  }

}
