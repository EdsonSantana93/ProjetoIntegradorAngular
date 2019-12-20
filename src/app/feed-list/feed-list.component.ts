import { Component, OnInit } from '@angular/core';
import { Feed } from './../modal/feed';
import { FeedService } from './../service/feed.service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {


  private buscar: number;
  private _feed: Feed =null;
  private feed: Feed[];

  constructor(private FeedService: FeedService) { }
  
  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.FeedService.getAll().subscribe((feedOut: Feed[]) => {
      this.feed = feedOut;
    })
  }

  findId(){
    this.FeedService.getOne(this.buscar).subscribe((feedOut: Feed) => {
      this._feed = feedOut;
      
    })
  }
  
}
