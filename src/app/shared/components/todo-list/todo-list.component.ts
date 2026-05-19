import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../materials/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() getTodosArr!: Itodos[];
  @Output() emitRemoveID: EventEmitter<string> = new EventEmitter<string>;

  @Output() emitEditObj:EventEmitter<Itodos>=new EventEmitter<Itodos>()
  constructor() { }

  ngOnInit(): void {
  }

  trackByTodosID(index:number, todo:Itodos){
    return todo.todoID;
  }

  onRemove(id: string){
    this.emitRemoveID.emit(id);
  }
  onEdit(todo:Itodos){
     this.emitEditObj.emit(todo)
  }

}
