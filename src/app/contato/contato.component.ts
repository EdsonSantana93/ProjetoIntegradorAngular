import { Component, OnInit } from '@angular/core';
import { FaleconoscoService } from '../service/faleconosco.service';
import { FaleConosco } from '../modal/faleConosco'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  private nome: string;
  private email: string;
  private telefone: string;
  private msg: string;
  private erroNome: string = null;
  private erroEmail: string = null;
  private erroTelefone: string = null;
  private erroMensagem: string = null;

  public faleConosco: FaleConosco;
  constructor(private srv: FaleconoscoService) { }

  ngOnInit() {
    this.faleConosco = new FaleConosco();
  }





  // validacão do formulario atraves da funcao validaForm
  validaForm() {
    var erros = 0;
    var regex = /[0-9]/; // regex para verificar a existencias de numeros entre 0 e 9 

    // validacao do campo nome
    // verifica se o campo não foi preenchido
    if (this.faleConosco.nome == "" || this.faleConosco.nome == null) {
      this.erroNome = "Nome não pode ficar vazio";
      erros++;
    } else {
      // verifica se o nome tem menos de 6 caracteres necessario para compror o menor nome possivel "ANA SÁ"
      if (this.faleConosco.nome.length <= 5) {
        this.erroNome = "Parece que seu nome está errado";
        erros++;
      } else {
        // verifica se o campo nome tem nome e sobre nome, para isso e ferificado se dentro da input tem ao menos um espaço entre os caracteres, caso o resultado da posicao for -1 não tem 
        if (this.faleConosco.nome.indexOf(" ") == -1) {
          this.erroNome = "Informe nome e sobrenome";
          erros++;
        } else {
          if (regex.test(this.faleConosco.nome) == true) {
            this.erroNome = "Nome não pode conter número";
            erros++;
          } else {
            this.erroNome = "";
          }
        }
      }
    }

    // validacao do campo telefone
    if (this.faleConosco.telefone == null) {
      this.erroTelefone = "Telefone não pode ficar vazio";
      erros++;
    } else {
      if (this.faleConosco.telefone.toString().length < 10) {
        this.erroTelefone = "Telefone muito curto";
        erros++;
      } else {
        if (this.faleConosco.telefone.toString().length > 11) {
          this.erroTelefone = "Telefone muito grande";
          erros++;
        } else {
          this.erroTelefone = "";
        }
      }
    }

    // validacao do campo email
    if (this.faleConosco.email == null || this.faleConosco.email == "") {
      this.erroEmail = "E-mail não pode ficar em vazio";
      erros++;
    } else {
      if (this.faleConosco.email.indexOf("@") == -1) {
        this.erroEmail = "O e-mail precisa de @";
        erros++;
      } else {
        if (this.faleConosco.email.indexOf(".com") == -1 || this.faleConosco.email.indexOf(" ") != -1) {
          this.erroEmail = "Formato de e-mail errado";
          erros++;
        } else {
          this.erroEmail = "";
        }
      }
    }

    //validação do mensagem, não pode ficar nulo
    if (this.faleConosco.msg == null || this.faleConosco.msg == "") {
      erros++;
      this.erroMensagem = "Mensagem não pode ficar vazia"
    } else {
      this.erroMensagem = "";
    }

    if (erros >= 1) {
      alert("erro")
    } else {
      alert("enviado")
      this.enviarDados();
    }

  }

  enviarDados() {
    console.log(this.faleConosco)
    this.srv.insere(this.faleConosco).subscribe(
      (res) => {
        alert("Dados atualizados com sucesso")
      },
      (err) => {
        console.log(err);
        alert("Falha na atualização dos dados");
      });
  }

}
