import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  private nome : string;
  private email: string;
  private telefone: string;
  private msg : string;
  private erroNome: string = null;
  private erroEmail: string = null;
  private erroTelefone: string = null;
  private erroMensagem: string = null;

  constructor() { }

  ngOnInit() {
  }

  // validacão do formulario atraves da funcao validaForm
validaForm(){
    var erros = 0;
    var regex = /[0-9]/; // regex para verificar a existencias de numeros entre 0 e 9 

    // validacao do campo nome
    // verifica se o campo não foi preenchido
    if (this.nome == "" || this.nome == null) { 
        this.erroNome = "Nome não pode ficar vazio";
        erros++;
      } else {
        // verifica se o nome tem menos de 6 caracteres necessario para compror o menor nome possivel "ANA SÁ"
        if (this.nome.length <= 5) {
          this.erroNome = "Parece que seu nome está errado";
          erros++;
        } else {
          // verifica se o campo nome tem nome e sobre nome, para isso e ferificado se dentro da input tem ao menos um espaço entre os caracteres, caso o resultado da posicao for -1 não tem 
          if (this.nome.indexOf(" ") == -1) {
            this.erroNome = "Informe nome e sobrenome";
            erros++;
          } else {
            if (regex.test(this.nome) == true) {
              this.erroNome = "Nome não pode conter número";
              erros++;
            } else {
              this.erroNome = "";
            }
          }
        }
      }

      // validacao do campo telefone
    if (this.telefone == null) {
        this.erroTelefone = "Telefone não pode ficar vazio";
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
        this.erroEmail = "E-mail não pode ficar em vazio";
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

      //validação do mensagem, não pode ficar nulo
      if (this.msg == null || this.msg == ""){
          erros++;
          this.erroMensagem = "Mensagem não pode ficar vazia"
      }else{
          this.erroMensagem = "";
      }

    if (erros >=1){
        alert("erro")
    }else {
        alert("enviado")
    }

}

}
