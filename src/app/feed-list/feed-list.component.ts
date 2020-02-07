import { Component, OnInit } from '@angular/core';
import { Postagem } from '../modal/Postagem';
import { FeedService } from './../service/feed.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Globals } from "../modal/Globals";
import { CadastroUsuario } from '../modal/CadastroUsuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Token } from '../modal/token';



@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css'],
  providers: [Globals]
})
export class FeedListComponent implements OnInit {
  usuario: CadastroUsuario;
  buscar: number;
  feedao: Postagem = new Postagem();
  feed: Postagem[];
  publicacao: string;
  now: Date = new Date();
  _feed: Postagem;


  constructor(private FeedService: FeedService, private router: Router, private srv: UsuarioService) { }

  ngOnInit() {
    let token: string = localStorage.getItem("eurekaToken");

    if (token) {

      this.srv.recuperaPorToken(token).subscribe(
        (res: CadastroUsuario) => {
          //this.usuario = Globals.usuario;
          this.usuario = res;
          /*this.usuario.nome = res.nome;
          this.usuario.idUsuario = res.idUsuario;*/
          this.findAll();
        },
        err => {
          console.log(err);
          alert("Erro ao Inserir")
        });
    } else {
      alert("Conecte-se a página!");
      this.router.navigate(['/']);
      console.log(localStorage.getItem);
    }
    /*this.usuario = Globals.usuario;
    this.findAll();
    console.log(this.feedao);
    if (!this.usuario) {
      this.router.navigate(['/']);
    } else {
      this.usuario = Globals.usuario;
    }*/
  }

  findAll() {
    /*this._feed = null;
    this.FeedService.recuperarFeed(this.usuario.idUsuario).subscribe((feedOut: Usuario) => this.usuario = feedOut);*/
    this.FeedService.getAll().subscribe((feedOut: Postagem[]) => {
      this.feed = feedOut;
      console.log(this.feed);
    })
  }

  findId() {
    if (this.buscar <= 0) {
      this._feed = null;
    } else {
      this.FeedService.getOne(this.buscar).subscribe((feedOut: Postagem) => {
        this._feed = feedOut;
        console.log(this.feedao);
      })
    }
  }

  enviarAlteracoes(feed: Postagem) {

    /*
    this.FeedService.editar(this.i).subscribe((res) => {
      alert("Postagem atualizada");
    },
      (erro) => {
        alert("Não foi possivel atualizar a postagem");
      });
      */
  }

  /*função de criar uma nova publicação ultilizando metodo post*/

  onEnter(){
    this.novaPubli();
  }

  novaPubli() {
    if (this.publicacao != null || this.publicacao != "") {
      this.feedao = new Postagem();
      this.feedao.texto = this.publicacao;
      this.feedao.datainclusao = this.now.toLocaleDateString();
      this.feedao.cadastro = this.usuario;
      //this.feedao.usuario = this.usuario;
      // this.feedao.usuario.idUsuario = 1;
      console.log(this.feedao);
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


  
