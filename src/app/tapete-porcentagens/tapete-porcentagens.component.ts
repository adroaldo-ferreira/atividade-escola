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
  resposta = 0;
  totalTentativas: number = 0;

  competidor: Competidor = {
    nome: 'Juvenal',
    cor: 'red',
    totalPontos: 0
  }

  resultados: number[] =
    [20, 25, 40, 50, 60,
      75, 8, 10, 16, 24,
      30, 12, 15, 35, 45,
      80, 150, 120, 225, 100,
      160, 200, 240, 300, 180];

  sortearValores() {
    this.valor = this.sortearValor(this.valores);
    this.percentual = this.sortearValor(this.percentuais);
    this.resposta = this.valor * this.percentual / 100.0;

    this.respostas.push(this.resposta);
  }

  sortearValor(array: number[]): number {
    return array[Math.floor(Math.random() * array.length)];
  }

  chunkArray(array: number[], chunkSize: number): number[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  verificarQuestao(opcao: number): void {
    if (opcao == this.resposta) {
      this.competidor.totalPontos += 1;
    }

    this.totalTentativas++;
    this.sortearValores();
    this.embaralharOpcoes();
  }

  embaralharArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  embaralharOpcoes() {
    this.resultados = this.embaralharArray(this.resultados);
  }
}

type Competidor = {
  nome: string;
  cor: string;
  totalPontos: number;
}
