import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarPokemonComponent } from './pages/mostrar-pokemon/mostrar-pokemon.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [

  //the path of the child routes are defined and pointing to their respective component

  {
    path: '',
    children: [
      { path: '', component: PokemonComponent },
      {path:':po',component:MostrarPokemonComponent},
      { path: '**', redirectTo: '' },
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
