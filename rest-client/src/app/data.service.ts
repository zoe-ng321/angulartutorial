import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, retryWhen, delay, scan } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  bookCache: {[isbn:string]: Book} = {}
  booksCache: Book[] = []

  constructor(private http: HttpClient) {}

  getBooks():Observable<Book[]>{
    let cachedBooks = this.booksCache;
    if (cachedBooks.length > 0){
      console.log("Got a cache hit for booksCache")
      return of(cachedBooks)
    }else{
      return this.http.get<Book[]>("/books").pipe(
        tap(books => this.booksCache = books),
        catchError(err => cachedBooks ? of (cachedBooks) : throwError(err))
      );
    }
  }

  getBook(isbn:string):Observable<Book>{
    let cachedBook = this.bookCache[isbn]
    if(cachedBook !== undefined){
      console.log("Got a cache hit")
      return of(cachedBook)
    }else{
      return this.http.get<Book>(`/books/${isbn}`).pipe(
        tap(book => this.bookCache[isbn] = book),
        catchError(err => cachedBook ? of(cachedBook) : throwError(err))
      );
    }
  }

  deleteBook(isbn:string):Observable<any>{
    return this.http.delete(`/books/${isbn}`).pipe(
      tap(_ => {
        delete this.bookCache[isbn];
        this.booksCache.filter(b => b.isbn !== isbn)
      }),
      catchError((err:HttpErrorResponse) => {
        if(err.status == 0){
          return throwError("Oops! Please check your network connection and try again.")
        }else{
          return throwError("Sorry there was a problem at the server.")
        }
      })
    );
  }

  saveBook(book:Book):Observable<any>{
    return this.http.put(`/books/${book.isbn}`, book).pipe(
      tap(_ => {
        this.booksCache = this.booksCache.filter(b => b.isbn !== book.isbn)
        this.bookCache[book.isbn] = book
        this.booksCache.push(book)
      })
    );
  }
}

export class Book{
  isbn: string
  title: string
  price: number
}
