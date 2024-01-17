import { Component ,OnInit} from '@angular/core';
import { JokesService } from '../jokes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'jockFetchAPI';

  jokes:any;

  constructor(private JokesService:JokesService){ }

  ngOnInit() {
    this.JokesService.getJokes().subscribe(response=>{
       this.jokes=response;
       console.log(this.jokes);
       
    })
    
    
  }
}
