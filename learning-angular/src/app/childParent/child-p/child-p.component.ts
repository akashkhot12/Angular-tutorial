import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-p',
  templateUrl: './child-p.component.html',
  styleUrl: './child-p.component.css'
})
export class ChildPComponent {

  @Output() updateDataEvent = new EventEmitter<string>();
}
