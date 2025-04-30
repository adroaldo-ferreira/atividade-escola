import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapetePorcentagensComponent } from './tapete-porcentagens/tapete-porcentagens.component';

@NgModule({
  declarations: [
    AppComponent,
    TapetePorcentagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
