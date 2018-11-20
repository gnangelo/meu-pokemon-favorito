import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonFavoritoComponent } from './pokemon-favorito/pokemon-favorito.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonFavoritoComponent,
    PaginaErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
