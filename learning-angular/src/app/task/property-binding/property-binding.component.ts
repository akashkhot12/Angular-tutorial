import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  // name = 'peter'
  // disable = false
  title = "akash"
  color = 'red'

  colorChange(){
    this.color = "green";
    this.title = "khot"
  }
}
