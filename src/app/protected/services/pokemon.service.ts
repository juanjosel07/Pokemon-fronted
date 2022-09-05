import { HttpClient } from '@angular/common/http';
import { Injectable } from  '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private url:string ="https://pokeapi.co/api/v2/pokemon/"


  
  public resultados:any[]=[];

  public url4:string =""

  constructor(private http:HttpClient) {


  }


   

  public a = this.http.get(this.url).subscribe((resp:any)=>{
    this.resultados=resp.results
    console.log(this.resultados)

    })


    
    consumirurl2(termino:string) {

      const url4=`${this.url}${termino}`
      console.log(url4,"ome")
      return this.http.get(url4)    
        
        
      

    }


    


  


  
}

