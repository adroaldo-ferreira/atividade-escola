import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TapetePorcentagensComponent } from './tapete-porcentagens/tapete-porcentagens.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TapetePorcentagensComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
