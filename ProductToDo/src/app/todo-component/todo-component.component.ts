import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Itodo} from '../itodo';


@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {

  todoList: Itodo[] = [];
  inputControl = new FormControl();
  // @ts-ignore
  constructor(private todoService: TodoService) { }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.todoService.getTodos().subscribe(next => {
      this.todoList = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }
  // tslint:disable-next-line:typedef
  toggleTodo(i) {}
  // tslint:disable-next-line:typedef
  addTodo() {}
  // tslint:disable-next-line:typedef
  deleteTodo(i) {}
}
