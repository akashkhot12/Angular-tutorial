import { Component } from '@angular/core';

@Component({
  selector: 'app-looping',
  templateUrl: './looping.component.html',
  styleUrl: './looping.component.css'
})
export class LoopingComponent {
   users = ['Anil','Bhaskar','Namdeo','Akash']

   usersDetails = [
    {name:'akash',email:'akash12@gmail.com',phone:909994},
    {name:'vinod',email:'vinod@gmail.com',phone:903994},
    {name:'piyush',email:'piyush@gmail.com',phone:994},
    {name:'sumit',email:'sumit@gmail.com',phone:1900},
   ]
}
