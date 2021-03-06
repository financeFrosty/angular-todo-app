import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: true },
    { description: 'laugh', done: true },
  ];

  get items(){
    if (this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string){
    this.allItems.unshift({
      description,
      done: false
    })
  }

  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
