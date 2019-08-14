import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
path = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
  goPokemon(Pokemon){
    this.path = 'https://pokeapi.co/api/v2/pokemon';
    this.path = this.path + '/' + Pokemon;
    return this.http.get(this.path);
}

}
