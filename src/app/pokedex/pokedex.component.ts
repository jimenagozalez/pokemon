import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from '../service/pokemon.service';

import { DetallePokemonComponent } from '../detalles-pokemon/detalle-pokemon/detalle-pokemon.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  searchQuery: string = '';
  pokemon: any;

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  searchPokemon() {
    this.pokemonService.getPokemonByNameOrId(this.searchQuery).subscribe(
      (data: any) => {
        this.pokemon = data;
      },
      (error) => {
        console.log('Error fetching Pokemon:', error);
      }
    );
  }

  openDetailsDialog() {
    this.dialog.open(DetallePokemonComponent, {
      data: this.pokemon,
      
      width: '400px',
    });
  }


}
