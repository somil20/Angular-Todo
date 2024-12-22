import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  standalone: true,  // This makes the component standalone
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  imports: [NgClass]
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();  // Event emitter for deletion

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);  // Emit the delete event
    console.log('onClick has been triggered');  // Log for debugging
  }
  onCheckboxClick(todo: Todo | undefined){
    this.todoCheckbox.emit(todo);

    
  }
  
}
