import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import * as action from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  @Input() todo: Todo;

  @ViewChild('inputTag') txtInputTag: ElementRef

  chkCompleted: FormControl
  txtInput: FormControl

  editing = false

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

    this.chkCompleted = new FormControl(this.todo.completed)
    this.txtInput = new FormControl(this.todo.text, Validators.required)

    this.chkCompleted.valueChanges.subscribe(value => {

      this.store.dispatch(action.toggleTodoItem({id: this.todo.id}))

    })
  }



  editingTodo(){
    this.editing = true
    setTimeout(() => {
      this.txtInputTag.nativeElement.select()
    }, 1)
  }

  finishEditing(){

    this.editing = false

    if (this.txtInput.invalid) {
      return
    }
    if (this.txtInput.value === this.todo.text) {
      return
    }



    this.store.dispatch(action.editTodoItem({id: this.todo.id, text: this.txtInput.value}));
  }

  deleteTodoItem(){
    this.store.dispatch(action.deleteTodoItem({id: this.todo.id}))
  }

}
