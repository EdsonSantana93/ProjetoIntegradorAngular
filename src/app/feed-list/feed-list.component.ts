import { Component, OnInit } from '@angular/core';
import { Feed } from './../modal/feed';
import { FeedService } from './../service/feed.service';


@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  constructor(private FeedService: FeedService) { }
  feed: Feed[];
  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.FeedService.getAll().subscribe((feedOut: Feed[]) => {
      this.feed = feedOut;
    })
  }
}
