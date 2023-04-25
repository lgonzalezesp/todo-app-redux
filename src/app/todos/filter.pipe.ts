import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "./models/todo.model";
import {FilterValid} from "../filter/filter.actions";

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: string): Todo[] {

    switch (filter){
      case FilterValid.completed:
        return todos.filter(todo => todo.completed);
      case FilterValid.pending:
        return todos.filter(todo => !todo.completed);
      case FilterValid.all:
        return todos;
      default:
        return todos;
    }
  }

}
