import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetail } from '../pokemon';
import { PokemonShareInfoService } from '../pokemon-share-info.service';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemondetailComponent implements OnInit {
  @Input('detail')
  detail!: PokemonDetail;

  constructor(private pokemonShareInfoService: PokemonShareInfoService) {
    this.pokemonShareInfoService.getObservable().subscribe(e => {
      console.log('e ' + e);
    });
  }

  ngOnInit(): void {}
}
