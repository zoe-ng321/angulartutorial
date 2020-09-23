import { Component, OnInit } from '@angular/core';
import { NewsService, News } from './news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  selectedNewsId:number=0
  newsItems:News[]=[]

  constructor(private newsSvc: NewsService) { }

  ngOnInit(): void {
    this.newsItems = this.newsSvc.getNewsItems();
  }

  expandNews(id:number){
    this.selectedNewsId = id;
    return false;
  }
}
