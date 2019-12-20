import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens")
  }

  getOne(id: number){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/postagens/${id}`)
  }
}

