import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapetePorcentagensComponent } from './tapete-porcentagens/tapete-porcentagens.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {FooterComponent} from "./components/footer/footer.component";

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
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
