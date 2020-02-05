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
  providers: [Globals]
})
export class FeedListComponent implements OnInit {
  usuario: Usuario;
  private buscar: number;
  private feedao: Feed = new Feed();
  private feed: Feed[];
  private i: number = 1;
  private publicacao: string;
  private _feed: Feed;
  

  constructor(private FeedService: FeedService, private router: Router) { }

  ngOnInit() {

    this.usuario = Globals.usuario;
    this.findAll();
    console.log(this.feedao);
    if (!this.usuario) {
      this.router.navigate(['/']);
    } else {
      this.usuario = Globals.usuario;
    }
  }

  findAll() {
    this.FeedService.getAll().subscribe((feedOut: Feed[]) => {
      this.feed = feedOut;
      console.log(this.feed)
    })
  }

  findId() {
    if (this.buscar <= 0) {
      this._feed = null;
    } else {
      this.FeedService.getOne(this.buscar).subscribe((feedOut: Feed) => {
        this._feed = feedOut;
        console.log(this.feedao);
      })
    }
  }

  enviarAlteracoes(feed: Feed){
    
    this.FeedService.editar(this.i).subscribe((res) =>{
      alert("Postagem atualizada");
    },
    (erro) => {
      alert("Não foi possivel atualizar a postagem");
    });
  }

  /*função de criar uma nova publicação ultilizando metodo post*/

  novaPubli() {
    if (this.publicacao != null || this.publicacao != "") {
      this.feedao = new Feed();
      this.feedao.setTexto(this.publicacao);
      this.feedao.setDatainclusao("23/01/2020");
      this.feedao.usuario = new Usuario();
      this.feedao.usuario.idUsuario = 1;
      this.FeedService.novaPubli(this.feedao).subscribe(
        res => {
          this.findAll();
        },
        err => {
          console.log(err);
          alert("erro ao inserir");
        }
      )
    }
    else {
      alert("nao é possivel incluir um post branco")
    }
  }
}
