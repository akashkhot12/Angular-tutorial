import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  changeValue(){
    this.data= Math.floor(Math.random()*10)
  }

  userDetails = [
    {name:"akash",email:"aksh@gmail.com"},
    {name:"vikash",email:"vik@gmail.com"},
    {name:"ashik",email:"ash@gmail.com"},
    {name:"laxman",email:"lax@gmail.com"},
  ]

  s="x"
  updateData(item:string){
    console.log(item);
    this.s = item
  }

  name:any;

  newTaskForm = new FormGroup({
    name:new FormControl(' '),
    password:new FormControl(' ')
  })

  loginUSer(){
    console.log(this.newTaskForm.value);
    
  }

}
