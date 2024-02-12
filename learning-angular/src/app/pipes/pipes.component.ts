import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title = "hello this is akash khot"

  today = Date();
  toUpperCase(title:string){
    return title.toUpperCase();
  }
}
