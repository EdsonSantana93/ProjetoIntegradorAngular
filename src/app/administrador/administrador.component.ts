import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service'
import { CadastroUsuario } from '../modal/CadastroUsuario';



@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  //vetor criado para puxar a lista de informações
  public listaUser: CadastroUsuario[];

  constructor(private srv: UsuarioService) { }

  ngOnInit() {
      this.srv.recuperaTodos().subscribe((res: CadastroUsuario[])=>{
      this.listaUser = res;
      console.log(this.listaUser);
    });
  }
}
