import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrl: './nested-loop.component.css'
})
export class NestedLoopComponent {

  usersDetails = [
    {name:'akash',phone:8989,socialAccounts:['facebook','github']},
    {name:'vinod',phone:989,socialAccounts:['facebook','github']},
    {name:'jordan',phone:1989,socialAccounts:['facebook','github']},
    {name:'stephan',phone:1989,socialAccounts:['facebook','github']}
  ]

}
