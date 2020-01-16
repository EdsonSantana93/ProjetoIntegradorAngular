import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modal/Usuario';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  // Serviço para alimentar o Feed de noticia
  getAll(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens");
  }

  getOne(id: number){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/postagens/${id}`);
  }


  // Serviços para o crud
  //puxando informações do banco do bando de dados (todas as informações)
  public recuperaTodos(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/all");
  }

  // Serviços para o crud
  //puxando informações do banco do bando de dados (puxando informações por ID)
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

