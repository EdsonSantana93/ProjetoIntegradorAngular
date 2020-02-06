import { Component, OnInit } from '@angular/core';
import { CadastroUsuario } from '../modal/CadastroUsuario';
import { Router } from '@angular/router'; // recupera o parâmetro passado na rota
import { UsuarioService } from '../service/usuario.service'


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  public usuario: CadastroUsuario = new CadastroUsuario();
  private id: number;

  constructor(private rota: Router, private srv: UsuarioService) { }

  ngOnInit() {

    let token: string = localStorage.getItem("eurekaToken");
    if (token) {
      this.srv.recuperaPorToken(token).subscribe(
        (res: CadastroUsuario) => {
          this.usuario = res;
        }
      );
    } else {
      this.rota.navigate(['']);
    }

    /*this.id=this.rota.snapshot.params["id"]; // declaração do arquivo App-routing.ts
    console.log("Número do ID: " + this.id);

    this.srv.recuperaDetalhe(this.id).subscribe((res:Usuario)=>{
      this.usuario = res; 
      console.log("Itens recuperados"); 
      console.log(this.usuario); 
    });
  */
  }

  enviarAlteracoes() {
    this.srv.insere(this.usuario).subscribe(
      (res) => {
        alert("Atualizado com sucesso");
      },
      (err) => {
        alert("Erro ao atualizar");
        console.log(err);
      });
  }
}
