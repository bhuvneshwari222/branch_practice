import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodos } from '../../materials/todos';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  @ViewChild('todoItem') todoItem!: ElementRef;

  @ViewChild('isCompleted') isCompleted!: ElementRef;

  @Output() EmitAdd: EventEmitter<Itodos> = new EventEmitter<Itodos>()

  @Input() editObj!: Itodos;

  @Output() emitUpdate: EventEmitter<Itodos> = new EventEmitter<Itodos>()

  isInEditMode: boolean = false;


  constructor() { }

  ngOnInit(): void {

  }

  todoAdd() {
    let new_todo: Itodos = {
      todoItem: this.todoItem.nativeElement.value,
      isCompleted: this.isCompleted.nativeElement.value === "true" ? true : false,
      todoID: Date.now().toString()
    }
    this.todoItem.nativeElement.value = '';
    this.isCompleted.nativeElement.value = true
    this.EmitAdd.emit(new_todo)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editObj'].currentValue) {
      this.isInEditMode = true;
      this.todoItem.nativeElement.value = this.editObj.todoItem;
      this.isCompleted.nativeElement.value = this.editObj.isCompleted;
    }
  }

  todoUpdate() {
    let Updated_obj: Itodos = {
      todoItem: this.todoItem.nativeElement.value,
      isCompleted: this.isCompleted.nativeElement.value,
      todoID: this.editObj.todoID
    }
    this.isInEditMode = false
    this.todoItem.nativeElement.value = '';
    this.isCompleted.nativeElement.value = true
    this.emitUpdate.emit(Updated_obj);
  }
}
