import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Todo } from "../../Todo";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { NotepadComponent } from "../notepad/notepad.component";


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent ,NotepadComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']  // Fixed typo here
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos");

    if (this.localItem) {
      // Parse todos from localStorage if present
      this.todos = JSON.parse(this.localItem);
    } else {
      // Initialize an empty array if no todos in localStorage
      this.todos = [];
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log('Todo to delete:', todo);
    const index = this.todos.indexOf(todo);  // Get the index of the todo
    if (index !== -1) {
      this.todos.splice(index, 1);  // Remove the todo from the array
    }
    localStorage.setItem("todos", JSON.stringify(this.todos));  // Update localStorage
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));  // Save to localStorage
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));  // Save to localStorage
  }
}

