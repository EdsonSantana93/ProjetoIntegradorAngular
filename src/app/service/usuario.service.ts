import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroUsuario } from '../modal/CadastroUsuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //recuperando informações da api de usuários do Isidro (todas as informações), que a partir de agora virá do Usuario
  public recuperaTodos(){
    return this.http.get("http://localhost:8080/cadastro/todos/");
  }


  public recuperaPorToken(token:String){
    return this.http.get("http://localhost:8080/cadastro/detalhes?token="+token);
  }
  //puxando informações da api de usuários do Isidro (puxando informações por ID)
  public recuperaDetalhe(id: number){
    return this.http.get("http://localhost:8080/cadastro/" + id);
  }

  //inserir novo usuario
  //metodo http, via post
  public insere(usuario: CadastroUsuario){
    return this.http.post("http://localhost:8080/cadastro/novo/", usuario);
  }

  //alterar informações dos usuários
  //método http, via put 
  public atualiza(usuario: CadastroUsuario){
    return this.http.put("http://localhost:8080/cadastro/novo", usuario);
  }

  public login(usuario: CadastroUsuario){
    return this.http.post("http://localhost:8080/login/", usuario);
  }
  
}
