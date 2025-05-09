import {Component} from '@angular/core';

@Component({
  selector: 'app-sistema-amortizacao',
  templateUrl: './sistema-amortizacao.component.html',
  styleUrls: ['./sistema-amortizacao.component.css']
})
export class SistemaAmortizacaoComponent {
  valor!: number;
  taxa!: number;
  periodo!: number;
  parcelas: Parcela[] = [];
  sistemas = [{name: 'PRICE'}, {name: 'SAC'}];
  escolha: string = 'PRICE';

  private gerarParcelasPrice(valor: number, taxa: number, periodo: number): Parcela[] {
    const i = taxa / 100.0; // taxa mensal
    let parcelas: Parcela[] = [];
    const pmt: number = this.calcularPMT(valor, i, periodo);

    let saldo = valor;
    for (let n = 1; n <= periodo; n++) {
      const juros = saldo * i;
      const amortizacao = pmt - juros;
      saldo -= amortizacao;

      parcelas.push({numero: n, pmt, juros, amortizacao, saldo});
    }

    return parcelas;
  }

  private calcularPMT(valor: number, taxa: number, periodo: number): number {
    return (valor * taxa * Math.pow(1 + taxa, periodo)) / (Math.pow(1 + taxa, periodo) - 1);
  }

  calcularValores() {
    if (this.valor <= 0 || this.taxa <= 0 || this.periodo <= 0) {
      alert("Os valores devem ser Positivos");
      return;
    }

    if (this.escolha == 'PRICE') {
      this.parcelas = this.gerarParcelasPrice(this.valor, this.taxa, this.periodo);
    } else if (this.escolha == 'SAC') {
      this.parcelas = this.gerarParcelasSAC(this.valor, this.taxa, this.periodo);
    } else {
      alert('Erro na escolha!')
    }
  }

  private gerarParcelasSAC(valor: number, taxa: number, periodo: number): Parcela[] {
    const i = taxa / 100.0; // taxa mensal
    let parcelas: Parcela[] = [];
    const amortizacaoMensal = valor / periodo;

    let saldo = valor;
    for (let n = 1; n <= periodo; n++) {
      const juros = saldo * i;
      const pmt = amortizacaoMensal + juros;
      saldo -= amortizacaoMensal;

      parcelas.push({numero: n, pmt, juros, amortizacao: amortizacaoMensal, saldo});
    }

    return parcelas;
  }

  mudarSistema(event: any) {
    if (event.value.name === 'PRICE') {
      // faça algo para o sistema PRICE
    } else if (event.value.name === 'SAC') {
      // faça algo para o sistema SAC
    }
  }
}

type Parcela = {
  numero: number;
  pmt: number;
  juros: number;
  amortizacao: number;
  saldo: number;
}
