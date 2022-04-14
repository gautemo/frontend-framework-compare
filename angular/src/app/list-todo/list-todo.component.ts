import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent {
  
  todos: string[] | undefined

  constructor(private storeService: StoreService) {
    this.storeService.todos.subscribe((todos) => this.todos = todos)
  }
  
  deleteTodo(todo: string){
    this.storeService.deleteTodo(todo)
  }

  trackByFn(index: number, item: string) {
    return item
  }
}
