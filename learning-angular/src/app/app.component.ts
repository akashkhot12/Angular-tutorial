import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular';
  display:string =''
  getValue(val:string){
    console.warn(val);
    this.display=val
  }


  data= 10;
}
