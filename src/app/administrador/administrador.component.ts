import { Component, OnInit } from '@angular/core';
import { FeedService } from '../service/feed.service';
import { Usuario } from '../modal/Usuario';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  //vetor criado para puxar a lista de informações
  public listaUser: Usuario[];

  constructor(private srv: FeedService) { }

  ngOnInit() {
    this.srv.recuperaTodos().subscribe((res: Usuario[])=>{
      this.listaUser = res;
    });
  }
}
