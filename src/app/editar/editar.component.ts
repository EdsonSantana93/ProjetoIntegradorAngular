import { Component, OnInit } from '@angular/core';
import { Feed } from '../modal/feed';
import { ActivatedRoute } from '@angular/router';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public feed: Feed = new Feed();
  private id: number; 
  
  constructor(private rota: ActivatedRoute, private srv: FeedService) { }

  ngOnInit() {
    this.id=this.rota.snapshot.params["id"]; // declaração do arquivo App-routing.ts
    console.log("Número do ID: " + this.id);

    this.srv.recuperarFeed(this.id).subscribe((res:Feed)=>{
      this.feed = res; 
      console.log("Itens recuperados"); 
      console.log(this.feed); 
    });
  }

  mudarPostagem(){
    this.srv.editar(this.feed).subscribe(
      (res)=>{
        alert("Atualizado com sucesso");
      },
      (err)=>{
        alert("Atualizado com sucesso");
        console.log(err);
      });
  }
}
