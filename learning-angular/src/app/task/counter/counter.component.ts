import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count = 0;
  counter(type:string){
    if (type==='minus') {
      this.count--
    }
   else if(type==='add'){
    this.count++
   }
  }
}
