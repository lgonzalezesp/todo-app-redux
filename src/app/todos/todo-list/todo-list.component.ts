import {Component, OnInit} from "@angular/core";
import {Todo} from "../models/todo.model";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import {FilterValid} from "../../filter/filter.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  todos: Todo[] = []
  currentFilter: string = FilterValid.all


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

   /* this.store.select('todos').subscribe(todos => {
      this.todos = todos
    })*/

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filter;
      })

  }

}
