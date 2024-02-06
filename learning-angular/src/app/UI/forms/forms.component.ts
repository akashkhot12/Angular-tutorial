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
  alert("your form was summited,")
  console.log(data);
  this.userData = data
  
  
}
}
