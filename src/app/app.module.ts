import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {TapetePorcentagensComponent} from './tapete-porcentagens/tapete-porcentagens.component';

import {ButtonModule} from 'primeng/button';
import {SistemaAmortizacaoComponent} from './sistema-amortizacao/sistema-amortizacao.component';
import {PaginatorModule} from "primeng/paginator";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {SelectButtonModule} from "primeng/selectbutton";
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    TapetePorcentagensComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SistemaAmortizacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    PaginatorModule,
    TableModule,
    FormsModule,
    DropdownModule,
    SelectButtonModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
