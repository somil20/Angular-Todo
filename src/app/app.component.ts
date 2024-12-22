import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosComponent} from './Mycomponent/todos/todos.component';
import { CommonModule } from '@angular/common';

 // Import CommonModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh-todo-list'
  //constructor(){
    //setTimeout(() => {
      //this.title = "title is changed"
   // }, 2000);
 //                     }
}
