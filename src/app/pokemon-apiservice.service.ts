import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonServiceRes, PokemonDetail } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIServiceService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonServiceRes> {
    return this.http.get<PokemonServiceRes>(url);
  }

  getPokemonInfo(id: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(url + id + '/');
  }
}
