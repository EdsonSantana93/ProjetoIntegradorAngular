import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroUsuario } from '../modal/CadastroUsuario';
import { Globals } from "../modal/Globals";
import { UsuarioService } from '../service/usuario.service'
import { Token } from '../modal/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Globals]
})
export class LoginComponent implements OnInit {

  
  usuarios: CadastroUsuario = null;
  
  public usuario: CadastroUsuario = new CadastroUsuario();

  /*private nome: string;
  private email: string;
  private telefone: number;
  private senha: string;*/
  private confirmacao: string;
  private erroNome: string = null;
  private erroEmail: string = null;
  private erroTelefone: string = null;
  private erroSenha: string = null;
  private erroConfirmacao: string = null;
  private erroStatus: string = null;
  private senhaForte: string = null;
  private senhaFraca: string = null;

  constructor(private srv: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.usuario)
    this.srv.login(this.usuario).subscribe(
      (res:Token)=>{
        console.log("Conectado!");
        console.log(res);
        localStorage.setItem("eurekaToken", res.strToken);
        
        // vou ter que buscar info de um servico do meu usuario a partir do token
        this.srv.recuperaPorToken(res.strToken).subscribe(
          (res:CadastroUsuario)=>{
            console.log("Info do usuario ");
            console.log(res);
            Globals.usuario = res;
            this.router.navigate(['Feed']);
         
          });
        /*alert("Usuário logado com sucesso.")*/

      }, 
      (err)=>{
        console.log("ERRO - Não Conectado! Erro: " + err); 
        alert("Usuário e/ou senha inválidos."); 
      });
  }


  // funcao para validar o formulario
  public validar() {
    var erros = 0;
    var regex = /[0-9]/; // regex é usado pera verificar a existencia de algum caractere entre a sequencia


    // validacao do campo nome
    if (this.usuario.nome == "" || this.usuario.nome == null) {
      this.erroNome = "Nome não pode ficar vazio";
      erros++;
    } else {
      if (this.usuario.nome.length <= 5) {
        this.erroNome = "Parece que seu nome está errado";
        erros++;
      } else {
        if (this.usuario.nome.indexOf(" ") == -1) {
          this.erroNome = "Informe nome e sobrenome";
          erros++;
        } else {
          if (regex.test(this.usuario.nome) == true) {
            this.erroNome = "Nome não pode conter número";
            erros++;
          } else {
            this.erroNome = "";
          }
        }
      }
    }

    // validacao do campo telefone
    if (this.usuario.telefone == null) {
      this.erroTelefone = "Telefone não pode ficar vazio";
      erros++;
    } else {
      if (this.usuario.telefone.toString().length < 10) {
        this.erroTelefone = "Telefone muito curto";
        erros++;
      } else {
        if (this.usuario.telefone.toString().length > 11) {
          this.erroTelefone = "Telefone muito grande";
          erros++;
        } else {
          this.erroTelefone = "";
        }
      }
    }

    // validacao do campo email
    if (this.usuario.email == null || this.usuario.email == "") {
      this.erroEmail = "E-mail não pode ficar em vazio";
      erros++;
    } else {
      if (this.usuario.email.indexOf("@") == -1) {
        this.erroEmail = "O e-mail precisa de @";
        erros++;
      } else {
        if (this.usuario.email.indexOf(".com") == -1 || this.usuario.email.indexOf(" ") != -1) {
          this.erroEmail = "Formato de e-mail errado";
          erros++;
        } else {
          this.erroEmail = "";
        }
      }
    }

    // validacao do campo senha
    if (this.usuario.senha == null || this.usuario.senha == "") {
      this.erroSenha = "Senha não pode ficar vazia";
      erros++;
    } else {
      if (this.usuario.senha.toString().length < 10) {
        this.erroSenha = "Senha muito curta";
        erros++;
      }if (this.usuario.senha.indexOf("@") == -1 && this.usuario.senha.indexOf("#") == -1 && this.usuario.senha.indexOf("&") == -1) {
        this.erroSenha = "Senha deve conter ao menos um caractere especial (@, #, &)";
        erros++;
      }else{
        if (this.usuario.senha.length < 10 && this.usuario.senha.indexOf("@") != -1 || this.usuario.senha.indexOf("#") != -1 ||  this.usuario.senha.indexOf("&") != -1){
          erros++;
        }else{
        this.erroSenha = "";
        }
      }
      // verifica se as senhas sao iguais
      if (this.usuario.senha == this.confirmacao) {
        this.erroConfirmacao = "";
      } else {
        this.erroConfirmacao = "senhas não conferem";
        erros++;
      }

      
      if (erros > 0) {
        alert("erro, os dados não estão corretos");
      } else {
       // alert("Cadastro realizado com sucesso");
        this.enviarDados();
      }
    }
  }

    // verifica se a senha é faca ou forte
    public mostrarStatus(){
      if (this.usuario.senha == null || this.usuario.senha == ""){
        this.senhaForte = "";
        this.senhaFraca = "";
      }else{ 
        if (this.usuario.senha.length < 10 || this.usuario.senha.indexOf("@") == -1 && this.usuario.senha.indexOf("#") == -1 && this.usuario.senha.indexOf("&") == -1) {
          this.senhaFraca = "Senha fraca";
          this.senhaForte = "";
        }else{
        this.senhaForte = "Senha forte";
        this.senhaFraca = "";
        }
      }
    }

   enviarDados(){
      console.log(this.usuario)
      this.srv.insere(this.usuario).subscribe(
        (res)=>{
          alert("Dados cadastrados com sucesso")
        }, 
        (err)=>{
          console.log(err); 
          alert("Falha no cadastro dos dados"); 
        });
    }
}
