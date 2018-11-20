import { PokemonFavoritoComponent } from './pokemon-favorito/pokemon-favorito.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'pokemon-favorito', component: PokemonFavoritoComponent},
  { path: 'pagina-erro', component: PaginaErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
