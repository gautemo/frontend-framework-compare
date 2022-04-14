import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  todos = new BehaviorSubject<string[]>([])

  constructor() { }

  deleteTodo(todo: string){
    this.todos.next(this.todos.value.filter(t => t !== todo))
  }

}
