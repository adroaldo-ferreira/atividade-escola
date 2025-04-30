import {Component} from '@angular/core';

@Component({
  selector: 'app-tapete-porcentagens',
  templateUrl: './tapete-porcentagens.component.html',
  styleUrls: ['./tapete-porcentagens.component.css']
})
export class TapetePorcentagensComponent {

  valores = [160, 240, 100, 80, 200, 300];
  percentuais = [10, 15, 50, 100, 25, 75];
  valor = 0;
  percentual = 0;
  respostas: number[] = [];

  resultados = [20, 25, 40, 50, 60, 75, 8, 10, 16, 24, 30, 12, 15, 35, 45, 80, 150, 120, 225, 100, 160, 200, 240, 300, 180];

  sortearValores() {
    this.valor = this.sortearValor(this.valores);
    this.percentual = this.sortearValor(this.percentuais);
    const resposta = this.valor * this.percentual / 100.0;

    this.respostas.push(resposta);
  }

  sortearValor(array: number[]): number {
    return array[Math.floor(Math.random() * array.length)];
  }
}

/*type Competidor = {
  nome: string;
  cor: string;
  pontuacao: number;
}*/
