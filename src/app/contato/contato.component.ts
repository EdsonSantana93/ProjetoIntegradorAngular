import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  private nome : string;
  private sobNome : string;
  private email: string;
  private telefone: string;
  private msg : string;

  /*tecla(){
    var evt = window.event;
    var tecla = evt.keyCode;
 
    if(tecla > 47 && tecla < 58){ 
      alert('Não pressione teclas númericas');
      evt.preventDefault();
    }

}*/

validaForm(){
  var i = 0;


  if (this.nome == "" || this.nome.length < 3) {
      alert('Nome invalido')
      i++;
  }
      if (this.sobNome == "" || this.sobNome.length < 3){
          alert('Sobrenome invalido');
          i++;
      } 
          if (this.email == "" || this.email.indexOf('@') == -1 || this.email.indexOf('.') == - 1 ){
              alert("E-mail invalido");
              i++;
          }
              if(this.telefone == "" || this.telefone.length < 9 || this.telefone.length > 9){
                  alert('Telefone invalido');
                  i++;
              }
                  if (this.msg == ""){
                      alert('Mensagem invalida')
                      i++;
                      
                  } 
                  else if (i >= 1){
                      alert('Mensagem não enviada')
                  } else {
                      alert('mensagem enviada');
                  }
}

  constructor() { }

  ngOnInit() {
  }

}
