import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../modal/Postagem';


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  // serviço para criar uma nova publicação
  novaPubli(feed: Postagem){
    console.log("teste do feed.service:\ ",feed);
    return this.http.post("http://localhost:8080/postagem/novo/",feed);
  }

  // Serviço para alimentar o Feed de noticia
  getAll(){
    let token = localStorage.getItem("eurekaToken");
    return this.http.get("http://localhost:8080/postagem/todos/?token=" + token);
  }

  getOne(id: number){
    return this.http.get("http://localhost:8080/postagem/"+id);
  }
  editar(id : number){
    return this.http.put("http://localhost:8080/postagem/" , id);
  }

 /* recuperarFeed(id: number){
    return this.http.get("http://localhost:8080/postagem/" + id);//faz o mesmo que o getOne(). escolher um pra deixar
  }*/
  /*
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
  }*/
}

