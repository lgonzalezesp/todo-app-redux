import {createAction, props} from "@ngrx/store";

export enum FilterValid {
  all = 'todos',
  completed = 'completados',
  pending = 'pendientes'
}

export const setFilter = createAction('[Filter] Set Filter',
  props<{ filterValid: string }>() );
