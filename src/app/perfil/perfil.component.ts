import { Component, OnInit } from '@angular/core';
import { Token } from '../../app/modal/token';
import { Globals } from '../modal/Globals';
import { UsuarioService } from '../service/usuario.service';
import { CadastroUsuario } from '../modal/CadastroUsuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [Globals]
})
export class PerfilComponent implements OnInit {
 
 /*inicializando variaveis que serão usadas*/
  public usuario: CadastroUsuario;
  public token: Token = new Token();
  public nome: string;
  public descricao: string;
  public foto: string;


  constructor(private us: UsuarioService) { }

  ngOnInit() {
    
    /*Buscando nome e descrição do perfil do banco de dados*/
    this.usuario = Globals.usuario;
    console.log(this.usuario);

    /*validando o token (se está como existente) no localStorage*/
    this.us.recuperaPorToken(localStorage.getItem("eurekaToken")).subscribe(
      /*se a resposta for positiva, isso será armazenado na var res*/
      (res: CadastroUsuario)=>{
        this.usuario = res;
      });
    
  }

  /*Recuperando nome do perfil (banco de dados)*/
  recuperaTodos(){
    this.us.recuperaTodos().subscribe(
      (res: CadastroUsuario)=>{
        this.usuario = res;
    });
  }

  /*Botão para salvar alterações realizadas no perfil*/
  salvarAlteracoes(){
    
  }

}
