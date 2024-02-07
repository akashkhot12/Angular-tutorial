import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
userData:any ={}

  getdata(data:NgForm){
  console.log(data);
  this.userData = data
}

display = true

toggle(){
this.display = !this.display
}
}
