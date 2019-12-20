import { Component, OnInit } from '@angular/core';
import { Feed } from '../modal/feed';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private buscar: number;
  feedlist: Feed = null;

  constructor(private FeedService: FeedService) { }

  ngOnInit() {
  }

  private findAll() {
    this.FeedService.getOne(this.buscar).subscribe((res: Feed)=> {this.feedlist = res;})
  }
}