import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../materials/todos';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() getTodosArr!: Itodos[];
  @Output() emitRemoveID: EventEmitter<string> = new EventEmitter<string>;

  @Output() emitEditObj: EventEmitter<Itodos> = new EventEmitter<Itodos>()
  constructor(
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  trackByTodosID(index: number, todo: Itodos) {
    return todo.todoID;
  }

  onRemove(id: string) {
    let config = new MatDialogConfig();
    config.data = `Are you sure to remove this todoItem with id ${id}!!!`;
    config.disableClose = false;
    config.width = '350px';
    let matdialogRef = this._matDialog.open(GetConfirmComponent,config)
    matdialogRef.afterClosed()
      .subscribe({
        next: resp => {
          if (resp) {
            this.emitRemoveID.emit(id);
          }
        },
        error: err => {
          console.log(err);
        }
      })
  }
  onEdit(todo: Itodos) {
    this.emitEditObj.emit(todo)
  }

}
