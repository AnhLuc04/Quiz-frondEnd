import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

let _id = 1;

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  userInput = new FormControl();
  todos: Array<ITodo> = [];
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
