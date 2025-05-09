import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapetePorcentagensComponent } from "./tapete-porcentagens/tapete-porcentagens.component";
import { HomeComponent } from "./home/home.component";
import { SistemaAmortizacaoComponent } from './sistema-amortizacao/sistema-amortizacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },           // rota padrão
  { path: 'tapete', component: TapetePorcentagensComponent },     // rota para /about
  { path: 'sistema-amortizacao', component: SistemaAmortizacaoComponent },
  { path: '**', redirectTo: '' }                    // rota coringa (não encontrado)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
