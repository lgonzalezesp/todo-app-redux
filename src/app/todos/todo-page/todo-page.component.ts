import { Component } from '@angular/core';
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  completed = false;

  constructor(private store: Store<AppState>) {
  }

  toggleAll() {

    this.completed = !this.completed;

    this.store.dispatch(actions.toggleAllTodoItems({completed: this.completed}));

  }

}
