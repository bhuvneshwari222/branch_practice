import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../materials/todos';
import { todosData } from '../../consts/todos';
import { SnackBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
todoArr:Array<Itodos>=[]
  constructor(private _snackbar:SnackBarService) { }

  ngOnInit(): void {
    this.todoArr=todosData
  }


  AddTodo(todo:Itodos){
    this.todoArr.push(todo);
    this._snackbar.openSnackBar(`The todoItem ${todo.todoItem} is added succesfully`);
  }
}
