import { Component, OnInit } from '@angular/core';
import { Feed } from '../modal/feed';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  private buscar: number;
  feedlist: Feed = null;

  private nome: string;
  private email: string;
  private telefone: number;
  private senha: string;
  private confirmacao: string;
  private erroNome: string = null;
  private erroEmail: string = null;
  private erroTelefone: string = null;
  private erroSenha: string = null;
  private erroConfirmacao: string = null;
  private erroStatus: string = null;

  constructor(private FeedService: FeedService) { }

  ngOnInit() {

  }


  // funcao para validar o formulario
  public validar() {
    var erros = 0;
    var regex = /[0-9]/; // regex é usado pera verificar a existencia de algum caractere entre a sequencia


    // validacao do campo nome
    if (this.nome == "" || this.nome == null) {
      this.erroNome = "Nome nao pode ficar vazio";
      erros++;
    } else {
      if (this.nome.length <= 5) {
        this.erroNome = "Parece que seu nome esta errado";
        erros++;
      } else {
        if (this.nome.indexOf(" ") == -1) {
          this.erroNome = "Informe nome e sobrenome";
          erros++;
        } else {
          if (regex.test(this.nome) == true) {
            this.erroNome = "Nome nao pode conter numero";
            erros++;
          } else {
            this.erroNome = "";
          }
        }
      }
    }

    // validacao do campo telefone
    if (this.telefone == null) {
      this.erroTelefone = "Telefone nao pode ficar vazio";
      erros++;
    } else {
      if (this.telefone.toString().length < 10) {
        this.erroTelefone = "Telefone muito curto";
        erros++;
      } else {
        if (this.telefone.toString().length > 11) {
          this.erroTelefone = "Telefone muito grande";
          erros++;
        } else {
          this.erroTelefone = "";
        }
      }
    }

    // validacao do campo email
    if (this.email == null || this.email == "") {
      this.erroEmail = "E-mail nao pode ficar em vazio";
      erros++;
    } else {
      if (this.email.indexOf("@") == -1) {
        this.erroEmail = "O e-mail precisa de @";
        erros++;
      } else {
        if (this.email.indexOf(".com") == -1 || this.email.indexOf(" ") != -1) {
          this.erroEmail = "Formato de e-mail errado";
          erros++;
        } else {
          this.erroEmail = "";
        }
      }
    }

    // validacao do campo senha
    if (this.senha == null || this.senha == "") {
      this.erroSenha = "Senha nao pode ficar vazia";
      this.erroStatus = "";
      erros++;
    } else {
      if (this.senha.toString().length < 10) {
        this.erroSenha = "Senha muito curta";
        this.erroStatus = "Senha fraca";
        erros++;
      }if (this.senha.indexOf("@") == -1 && this.senha.indexOf("#") == -1 && this.senha.indexOf("&") == -1) {
        this.erroSenha = "Senha deve conter ao menos um caractere especial (@, #, &)";
        this.erroStatus = "Senha fraca";
        erros++;
      }else{
        if (this.senha.length < 10 && this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 ||  this.senha.indexOf("&") != -1){
          this.erroStatus = "Senha fraca";
          erros++;
        }else{
        this.erroStatus = "Senha forte";
        this.erroSenha = "";
        }
      }

      /* verifica se a senha é faca ou forte
      if (this.senha.length < 10 || this.senha.indexOf("@") == -1 && this.senha.indexOf("#") == -1 && this.senha.indexOf("&") == -1) {
        this.erroStatus = "Senha fraca";
        erros++;
      } else {
        this.erroStatus = "Senha forte";
      }*/


      // verifica se as senhas sao iguais
      if (this.senha == this.confirmacao) {
        this.erroConfirmacao = "";
      } else {
        this.erroConfirmacao = "senhas nao conferem";
        erros++;
      }

      
      if (erros > 0) {
        alert("erro, os dados nao estao corretos");
      } else {
        alert("Cadastro realizado com sucesso");
      }
    }
  }


  /*
    funcao para mostrar status da senha*/

  /* public mostrarStatus() {
     if (this.senha.indexOf("@") == -1 && this.senha.indexOf("#") == -1 && this.senha.indexOf("&") == -1) {
       this.erroStatus = "Senha fraca";
     }else{
       if (this.senha == null || this.senha == ""){
         this.erroStatus = "";
       }
       this.erroStatus = "Senha forte";
     }
   }*/
}