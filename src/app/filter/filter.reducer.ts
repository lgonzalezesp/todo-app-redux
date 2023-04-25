import {createReducer, on} from "@ngrx/store";
import * as actions from "./filter.actions";
import {FilterValid} from "./filter.actions";

export const initialState: string = FilterValid.all
export const filterReducer = createReducer(
  initialState,
  on(actions.setFilter, (state, {filterValid}) => filterValid)

);
