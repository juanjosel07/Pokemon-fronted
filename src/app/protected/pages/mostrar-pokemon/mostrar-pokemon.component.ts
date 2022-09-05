import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-mostrar-pokemon',
  templateUrl: './mostrar-pokemon.component.html',
  styleUrls: ['./mostrar-pokemon.component.css']
})
export class MostrarPokemonComponent implements OnInit {

public abilities!:any
public image:string=''
public url3:string=''
public name:string=''
    
  constructor(private activateRoute:ActivatedRoute,private PokemonService:PokemonService) { }

  ngOnInit(): void {
  
    this.activateRoute.params.subscribe(params=>{
      this.url3=params['po']

      this.PokemonService.consumirurl2(this.url3)
      .subscribe((dat:any)=>{
        this.name=dat.name
        this.abilities=dat.abilities
        this.image=dat.sprites.front_default
       // console.log(this.datt2)     
       // console.log(dat);
      })
      


    });




  }

}
