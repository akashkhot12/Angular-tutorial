import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FetchAPI';
  quote: any;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getQuote().subscribe(response => {
      this.quote = response;
    });
 
  }
}
