import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Code-step-by-step';

  getName(name:any){
    console.log(name);
    
  }

  getFinal = ''

  getValue(val:string){
    console.log(val);
    this.getFinal = val;
  }

  count = 0;

  counter(type:string){
    type ==='add'?this.count++:this.count--
  }
}
