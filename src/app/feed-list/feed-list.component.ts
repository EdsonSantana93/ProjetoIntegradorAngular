import { Component, OnInit } from '@angular/core';
import { Feed } from './../modal/feed';
import { FeedService } from './../service/feed.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Globals } from "../modal/Globals";
import { Usuario } from '../modal/Usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css'],
  providers: [ Globals]
})
export class FeedListComponent implements OnInit {
  usuario: Usuario;
  private buscar: number;
  private _feed: Feed;
  private feed: Feed[];

  constructor(private FeedService: FeedService, private router: Router) { }
  
  ngOnInit() {

    this.usuario = Globals.usuario;
    this.findAll();
    console.log(this.feed);
    if(!this.usuario){
      this.router.navigate(['/']);
    } else{
      this.usuario = Globals.usuario;
    }
  }

  findAll(){
    this.FeedService.getAll().subscribe((feedOut: Feed[]) => {
      this.feed = feedOut;
      console.log(this.feed)
    })
  }

  findId(){
    if(this.buscar <= 0){
      this._feed = null;
    }else{
    this.FeedService.getOne(this.buscar).subscribe((feedOut: Feed) => {
      this._feed = feedOut;
      console.log(this._feed);
    })
    }
  }
  
}
