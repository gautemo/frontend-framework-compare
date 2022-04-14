import { Component } from '@angular/core';
import { StoreService } from '../store.service'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  input = ''

  constructor(private storeService: StoreService) {}

  addTodo(){
    if(this.input){
      this.storeService.todos.next([...this.storeService.todos.value, this.input])
      this.input = ''
    }
  }
}
