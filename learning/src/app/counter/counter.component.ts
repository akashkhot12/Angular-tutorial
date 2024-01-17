import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  styleUrl: './counter.component.css',
  templateUrl:'./counter.component.html'
})
export class CounterComponent {
  count = 0;
  counter(type:string){
   type=='add'?this.count++:this.count--
  }
}
