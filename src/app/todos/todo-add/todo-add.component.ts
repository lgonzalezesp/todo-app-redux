import {Component, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import * as action from "../todo.actions";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit{

  txtInput: FormControl;
  ngOnInit(): void {
  }

  constructor(private store: Store<AppState>){
    this.txtInput = new FormControl('',Validators.required);

  }

  addTodo(){
    if(this.txtInput.invalid){
      return;
    }
    this.store.dispatch(action.addTodoItem({text: this.txtInput.value}));

    this.txtInput.reset();
  }

}
