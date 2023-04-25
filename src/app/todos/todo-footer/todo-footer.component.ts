import {Component, OnInit} from "@angular/core";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import {FilterValid, setFilter} from "../../filter/filter.actions";
import {TitleCasePipe} from "@angular/common";
import {deleteAllCompletedTodoItems} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit{

  currentFilter: string = FilterValid.all
  filters = [FilterValid.all, FilterValid.completed, FilterValid.pending]

  countPending: number = 0;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

   this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.countPending = state.todos.filter(todo => !todo.completed).length;
   })
  }

  setFilter(filter: FilterValid){
    this.store.dispatch(setFilter({filterValid: filter}));
  }

  clearCompleted(){
    this.store.dispatch(deleteAllCompletedTodoItems());
  }
}
