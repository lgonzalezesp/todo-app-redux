import {createAction, props} from "@ngrx/store";

export const addTodoItem = createAction( '[TODO] Add Todo Item',
  props<{ text: string }>());

export const toggleTodoItem = createAction( '[TODO] Toggle Todo Item',
  props<{ id: number }>());

export const editTodoItem = createAction( '[TODO] Edit Todo Item',
  props<{ id: number, text: string }>());

export const deleteTodoItem = createAction( '[TODO] Delete Todo Item',
  props<{ id: number }>());

export const toggleAllTodoItems = createAction( '[TODO] Toggle All Todo Items',
  props<{ completed: boolean }>());


export const deleteAllCompletedTodoItems = createAction( '[TODO] Delete All Completed Todo Items');
