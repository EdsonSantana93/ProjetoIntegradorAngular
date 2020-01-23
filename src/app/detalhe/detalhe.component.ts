import { Component, OnInit } from '@angular/core';
import {Usuario} from '../modal/Usuario'; 
import {ActivatedRoute} from '@angular/router'; // recupera o parâmetro passado na rota
import {FeedService} from '../service/feed.service'; 


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  private id: number; 

  constructor(private rota: ActivatedRoute, private srv: FeedService) { }

  ngOnInit() {
    this.id=this.rota.snapshot.params["id"]; // declaração do arquivo App-routing.ts
    console.log("Número do ID: " + this.id);

    this.srv.recuperaDetalhe(this.id).subscribe((res:Usuario)=>{
      this.usuario = res; 
      console.log("Itens recuperados"); 
      console.log(this.usuario); 
    });

  }

    enviarAlteracoes(){
      this.srv.atualiza(this.usuario).subscribe(
        (res)=>{
          alert("Atualizado com sucesso");
        },
        (err)=>{
          alert("Erro ao atualizar");
          console.log(err);
        });
    }
}
