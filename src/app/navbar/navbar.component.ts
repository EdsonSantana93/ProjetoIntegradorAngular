import { Component, OnInit } from '@angular/core';
import { Feed } from '../modal/feed';
import { FeedService } from '../service/feed.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   

  private buscar: number;
  feedlist: Feed = null;

  private nome : string;
  private email : string;
  private telefone : number;
  private senha : string;
  private senha2 : string;
  private erroNome : string = null;
  private erroEmail : string = null;
  private erroTelefone : string = null;
  private erroSenha : string = null;
  private erroGeral : string = null;

  constructor(private FeedService: FeedService) { }

  ngOnInit() {
  
  }

  public validar() {
    var contAcertos = 0;

    if (this.nome === null || this.telefone === null || this.email === null || this.senha === null || this.senha2 === null) {
      alert("Preencha os campos corretamente!");
    } else {
        if (this.nome.indexOf(" ") == -1) {
          this.erroNome = "Digite o nome corretamente"
        } else {
          contAcertos++;
        }

        if (this.telefone.toString().length < 10 || this.telefone.toString().length > 11) {
          this.erroTelefone = "Informe um telefone válido";
        } else {
          contAcertos++;
        }
        if (this.email == null || this.email.indexOf('@') == 1 || this.email.indexOf('.') == 1) {
          this.erroEmail = "Inform um e-mail válido"
          
        } else {
          contAcertos++;
        }
        if (this.senha == null || this.senha.length < 10 || this.senha != this.senha2) { 
          
          this.erroSenha = "Confirme se as senhas são iguais";
          
          if(this.senha.indexOf('@') == 1 || this.senha.indexOf('#') == 1 || this.senha.indexOf('$') == 1 || this.senha.indexOf('%') == 1 || this.senha.indexOf('&') == 1){
            alert('Senha forte');
            contAcertos++;
          } else {
            alert('Senha fraca');
            contAcertos++;
          }
        } 
          if (contAcertos >= 4){
            alert('Cadastro realizado com sucesso!');
          } else {
            alert('Preencha os campos corretamente!');
          }
      }
  }

  /*public forcaSenha () {
    this.senha.complexify({}, function(valid, complexity));
  }*/

/*  $(function ()  {
    $("#").complexify({}, function (valid, complexity) {
        //exibir o nível da senha
    });
});*/


  /*private tecla(){
    var evt = window.event;
    var tecla = evt.keyCode;
 
    if(tecla > 47 && tecla < 58){ 
      alert('Não pressione teclas númericas');
      evt.preventDefault();
    }

}*/

  /*validPhone (phone : any) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(phone);
}
  isValidPhone = (phone : any) => {
    const brazilianPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
    return brazilianPhoneRegex.test(phone);
  };*/

  
}