import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../materials/todos';
import { todosData } from '../../consts/todos';
import { SnackBarService } from '../../services/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todosArr: Itodos[] = [];
  editObj!: Itodos;

  constructor(
    private _snackbar: SnackBarService
  ) { }

  ngOnInit(): void {
    this.todosArr = todosData;
  }


  AddTodo(todo: Itodos) {
    this.todosArr.push(todo);
    this._snackbar.openSnackBar(`The todoItem ${todo.todoItem} is added succesfully`);
  }

  getRemoveID(id: string) {
    let getIndex = this.todosArr.findIndex(t => t.todoID === id);
    let removedID = this.todosArr.splice(getIndex, 1);
    this._snackbar.openSnackBar(`The todoItem with id ${removedID[0]} is removed succesfully!!!`);
  }
  onEdit(todo: Itodos) {
    this.editObj = todo;
  }

  todoUpdate(todo: Itodos) {
    let getindex = this.todosArr.findIndex(t => t.todoID === todo.todoID);
    this.todosArr[getindex] = todo;
    this._snackbar.openSnackBar(`the TodoItem is updated succesfully !!!!`)
  }
}
