import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Prova Dev Web';

  value1: number | undefined;
  value2: number | undefined;
  resultado: number | undefined;
  operador: string | undefined  

  constructor() { }

  getOperaracao(op:string){
    debugger
    this.operador = op;
  }

  calcular(){
    debugger
    this.operador;
    if(this.operador == '+'){
      this.soma();
    }else if(this.operador == '-'){
      this.subtracao();
    }else if(this.operador == '*'){
      this.multiplicacao();
    }else if(this.operador == '/'){
      this.divisao();
    }
  }
  

  soma() {
    this.resultado = Number(this.value1) + Number(this.value2);
  }

  subtracao() {
    this.resultado = Number(this.value1) - Number(this.value2);
  }

  multiplicacao() {
    this.resultado = Number(this.value1) * Number(this.value2);
  }

  divisao() {
    if (Number(this.value2) != 0) {
      this.resultado = Number(this.value1) / Number(this.value2);
    }
    else {
      alert('Não é possivel efetuar divisão por 0');
    }
  }

}
