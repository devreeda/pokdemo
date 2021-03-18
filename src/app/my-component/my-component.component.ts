import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonDetail } from '../pokemon';
import { PokemonAPIServiceService } from '../pokemon-apiservice.service';
import { PokemonShareInfoService } from '../pokemon-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokemonAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPokemonID: string = '1';
  searchPokemonName: string = '';
  pokemonDetail: PokemonDetail | undefined;

  pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonAPIServiceService,
    private pokemonShareInfoService: PokemonShareInfoService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon('' + index, e.name, e.url));
      });
    });
  }

  go() {
    this.pokemonShareInfoService.setValue(this.selectedPokemonID);

    if (this.selectedPokemonID !== '') {
      this.pokemonService
        .getPokemonInfo(this.selectedPokemonID)
        .subscribe(data => {
          this.pokemonDetail = data;
        });
    }
  }
}
