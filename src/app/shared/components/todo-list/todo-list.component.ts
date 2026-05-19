import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../materials/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() getTodosArr!: Itodos[];

  @Output() emitEditObj:EventEmitter<Itodos>=new EventEmitter<Itodos>()
  constructor() { }

  ngOnInit(): void {
  }

  trackByTodosID(index:number, todo:Itodos){
    return todo.todoID;
  }

  onEdit(todo:Itodos){
     this.emitEditObj.emit(todo)
  }

}
