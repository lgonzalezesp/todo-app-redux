import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions'
import {Todo} from "./models/todo.model";

export const initialState: Todo[] = []

export const todoReducer = createReducer(
  initialState,
  on(actions.addTodoItem, (state, {text}) => [...state, new Todo (text)]),
  on(actions.toggleTodoItem, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
  }
  ),
  on(actions.editTodoItem,(state,{id,text}) => {

    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text
        }
      } else {
        return todo
      }
    })

  }),

  on(actions.deleteTodoItem, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(actions.toggleAllTodoItems, (state, {completed}) => state.map(todo => {
    return {
      ...todo,
      completed: completed
    }
  }
  )),

  on(actions.deleteAllCompletedTodoItems, (state) => state.filter(todo => !todo.completed))
);
