import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { MostrarPokemonComponent } from './pages/mostrar-pokemon/mostrar-pokemon.component';


@NgModule({
  declarations: [
    PokemonComponent,
    MostrarPokemonComponent
  ],

  imports: [
    CommonModule,
    ProtectedRoutingModule,
  ]
})
export class ProtectedModule { }
