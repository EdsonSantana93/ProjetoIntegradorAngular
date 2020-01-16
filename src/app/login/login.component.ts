import { Component, OnInit } from '@angular/core';
import { FeedService } from '../service/feed.service';

import { Usuario } from '../modal/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private buscar: number;
  //feedlist: Feed = null;
  
  public usuario: Usuario = new Usuario();

  constructor(private FeedService: FeedService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.usuario)
    this.FeedService.login(this.usuario).subscribe(
      (res)=>{
        alert("Usuário logado com sucesso.")
      }, 
      (err)=>{
        console.log(err); 
        alert("Usuário e/ou senha inválidos."); 
      });
  }
}
