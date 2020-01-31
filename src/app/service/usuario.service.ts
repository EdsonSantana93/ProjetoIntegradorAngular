import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modal/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //recuperando informações da api de usuários do Isidro (todas as informações), que a partir de agora virá do Usuario
  public recuperaTodos(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/all");
  }

  //puxando informações da api de usuários do Isidro (puxando informações por ID)
  public recuperaDetalhe(id: number){
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/" + id);
  }

  //inserir novo usuario
  //metodo http, via post
  public insere(usuario: Usuario){
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/new", usuario);
  }

  //alterar informações dos usuários
  //método http, via put 
  public atualiza(usuario: Usuario){
    return this.http.put("http://cloud.professorisidro.com.br:8088/usuario", usuario);
  }

  public login(usuario: Usuario){
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/login", usuario);
  }
  
}
