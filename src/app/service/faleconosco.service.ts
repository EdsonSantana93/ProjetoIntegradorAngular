import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaleConosco } from '../modal/faleConosco';

@Injectable({
  providedIn: 'root'
})
export class FaleconoscoService {

  constructor(private http: HttpClient) { }

  novoFAQ(faq: FaleConosco){
    return this.http.post("",faq);
  }
}
