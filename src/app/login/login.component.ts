import { Component, OnInit } from '@angular/core';
import { FeedService } from '../service/feed.service';
import { Router } from '@angular/router';
import { Usuario } from '../modal/Usuario';
import { Globals } from "../modal/Globals";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Globals]
})
export class LoginComponent implements OnInit {

  private buscar: number;
  //feedlist: Feed = null;
  
  public usuario: Usuario = new Usuario();
  

  constructor(private FeedService: FeedService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.usuario)
    this.FeedService.login(this.usuario).subscribe(
      (res:Usuario)=>{
        console.log("Conectado!");
        Globals.usuario = res;
        this.router.navigate(['Feed']);
        /*alert("Usuário logado com sucesso.")*/

      }, 
      (err)=>{
        console.log("ERRO - Não Conectado! Erro: " + err); 
        alert("Usuário e/ou senha inválidos."); 
      });
  }
}
