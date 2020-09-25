import { Component, OnInit } from '@angular/core';
import { Quote, QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  latestQuote: Quote;

  constructor(private quoteSvc: QuoteService) { }

  ngOnInit(): void {
    this.quoteSvc.getQuotes().subscribe(
      quote => this.latestQuote = quote
    )
  }

}
