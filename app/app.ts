import {Component} from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';

type Todo = {text:string};

@Component({
  selector: 'todo-app',
  template: ` 
              <section class="todoapp">
                <section class=" header">
                  <form (ngSubmit)="add(newTodoText.value); newTodoText.value = '';">
                    <h1>ng2dos</h1>
                    <input class="new-todo" placeholder="What needs to be done?" #newTodoText autofocus>
                  </form>
                </section>
                <section class="main">
                  <ul class="todo-list">
                    <li class="todo" *ngFor="let todo of todos">
                      <div class="view">
                        <label>{{todo.text}}</label>
                        <button class="destroy" (click)="destroy(todo)"></button>
                      </div>
                    </li>
                  </ul>
                </section>
              </section>`
})
export class TodoApp {

  public todos:Todo[];

  constructor() {
    this.todos = [];
  }

  add(text) {
    this.todos.push({text});
  }

  destroy(todoToRemove) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove)
  }

}

bootstrap(TodoApp);