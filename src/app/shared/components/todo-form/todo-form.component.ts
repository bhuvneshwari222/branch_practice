import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodos } from '../../materials/todos';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoItem')todoItem!:ElementRef;

  @ViewChild('isCompleted')isCompleted!:ElementRef;

  @Output() EmitAdd:EventEmitter<Itodos>=new EventEmitter<Itodos>()
isInEditMode:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }

  todoAdd(){
   let new_todo:Itodos={
    todoItem:this.todoItem.nativeElement.value,
    isCompleted:this.isCompleted.nativeElement.value==="true"?true:false,
    todoID:Date.now().toString()
   }
   this.todoItem.nativeElement.value='';
   this.isCompleted.nativeElement.value=true
  this.EmitAdd.emit(new_todo)
  }

}
