import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonServiceService {

  baseUrl = "https://pokeapi.co/api/v2";
  imagemUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(private http: HttpClient) { 
  }

  buscarPokemons(
    
  ): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?offset=1
  }&limit=30`);
  }


}
