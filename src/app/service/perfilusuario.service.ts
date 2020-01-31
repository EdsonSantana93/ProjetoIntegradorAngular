import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PerfilusuarioService {

  constructor(private http: HttpClient) { }

  getOne(id: number){
    return this.http.get("http://localhost:8080/usuario/"+id);
  }

}
