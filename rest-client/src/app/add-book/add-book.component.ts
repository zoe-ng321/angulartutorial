import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = new Book

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addBook(){
    this.dataService.saveBook(this.book).subscribe(
      _ => this.router.navigate(['/'])
    )
  }

}
