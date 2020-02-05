import { Component, OnInit } from '@angular/core';
import { Token } from '../../app/modal/token';
import { Usuario } from '../../app/modal/Usuario';
import { Globals } from '../modal/Globals';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [Globals]
})
export class PerfilComponent implements OnInit {
 
 /*inicializando variaveis que serão usadas*/
  public usuario: Usuario;
  public token: Token = new Token();
  public nome: string;
  public descricao: string;


  constructor(private us: UsuarioService) { }

  ngOnInit() {
    
    /*Buscando nome e descrição do perfil do banco de dados*/
    this.usuario = Globals.usuario;
    console.log(this.usuario);

    /*validando o token (se está como existente) no localStorage*/
    this.us.recuperaPorToken(localStorage.getItem("eurekaToken")).subscribe(
      /*se a resposta for positiva, isso será armazenado na var res*/
      (res: Usuario)=>{
        this.usuario = res;
      });
    
  }

  /*Recuperando nome do perfil (banco de dados)*/
  recuperaTodos(){
    this.us.recuperaTodos().subscribe(
      (res: Usuario)=>{
        this.usuario = res;
    });
  }

  /*Botão para salvar alterações realizadas no perfil*/
  salvarAlteracoes(){
    
  }

}
