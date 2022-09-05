import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent{

  // return the results values of consuming the api in the service pokemonService

  get resultados(){

      return this.PokemonService.resultados;
    
  }

// the pokemonService is injected into the constructor
//the Authservice  is injected into de constructor

  constructor(private PokemonService:PokemonService,private router:Router, private AuthService:AuthService) { }


  //function that logsout and sends the user to the authentication page 
  logout() {

    this.router.navigateByUrl('/auth');
    this.AuthService.logout()

  }




}


