import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
 constructor(){}
 @ Input() item = 0;
}
