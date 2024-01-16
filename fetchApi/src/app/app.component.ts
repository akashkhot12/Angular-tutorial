import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fetchApi';

  value = ''
 getValue(val:any){
console.log(val);
this.value = val;
 }

 count = 0;
 counter(type:string){
  type=='add'?this.count++:this.count--
 }
}
