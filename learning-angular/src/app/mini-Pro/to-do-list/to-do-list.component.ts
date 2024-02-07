import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
list:any = [];

addTask(item:string){
console.warn(item);
this.list.push({id:this.list.length,name:item})

}

removeTask(id:number){
this.list = this.list.filter((item: { id: number; })=>item.id!==id)
}
}
