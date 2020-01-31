import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../modal/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  novoComent(comentario: Comentario){
    return this.http.post("",comentario);
  }

  getAll(){
    return this.http.get("");
  }

}
