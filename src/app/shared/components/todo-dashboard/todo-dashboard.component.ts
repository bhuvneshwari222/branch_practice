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
  constructor(
    private _snackbar: SnackBarService,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.todosArr = todosData;
  }


  AddTodo(todo: Itodos) {
    this.todosArr.push(todo);
    this._snackbar.openSnackBar(`The todoItem ${todo.todoItem} is added succesfully`);
  }

  getRemoveID(id: string) {
    let config = new MatDialogConfig;
    config.data = `Are you sure to remove this todoItem with id ${id}!!!`;
    config.disableClose = false;
    config.width = '350px';
    let matdialogRef = this._matDialog.open(GetConfirmComponent)
    matdialogRef.afterClosed()
      .subscribe({
        next: resp => {
          if (resp) {
            let getIndex = this.todosArr.findIndex(t => t.todoID === id);
            let removedID = this.todosArr.splice(getIndex, 1);
             this._snackbar.openSnackBar(`The todoItem with id ${removedID[0]} is removed succesfully!!!`);
          }
        },
        error: err =>{
          console.log(err);
        }
      })
  }
}
