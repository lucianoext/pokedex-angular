import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
   name: string;
   sprite: string;
  constructor(private http: HttpService) { }
  pokemons: object;
  pokemon: object;
  ngOnInit() {
    this.http.getPokemons().subscribe(data =>{
      this.pokemons = data;
      console.log(this.pokemons);
    }
    );
  }
  goPokemon() {
    this.http.goPokemon(this.name).subscribe(data => {
        this.pokemon = data;
        console.log(this.pokemon);
      }
    );
  }

}
