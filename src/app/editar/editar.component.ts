import { Component, OnInit } from '@angular/core';
import { Postagem } from '../modal/Postagem';
import { Router } from '@angular/router';
import { FeedService } from '../service/feed.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public feed: Postagem;
  private id: number;

  constructor(private router: Router, private srv: FeedService, private servico: UsuarioService) { }

  ngOnInit() {
    /*this.id=this.rota.snapshot.params["id"]; // declaração do arquivo App-routing.ts
    console.log("Número do ID: " + this.id);*/
    let token: string = localStorage.getItem("eurekaToken");

    if (token) {

      this.servico.recuperaPorToken(token).subscribe(
        (res: Postagem) => {
          this.feed = res;
          console.log("Itens recuperados");
          console.log(this.feed);

          //this.mudarPostagem();
        }, err => {
          console.log(err);
          alert("Erro ao Inserir")
        });

    } else {
      alert("Conecte-se a página!");
      this.router.navigate(['/']);
      console.log(localStorage.getItem);
    }

  }
  mudarPostagem() {
    this.srv.novaPubli(this.feed).subscribe(
      (res) => {
        alert("Atualizado com sucesso");
      },
      (err) => {
        alert("Não rolou, gente fina");
        console.log(err);
      });
  }
}