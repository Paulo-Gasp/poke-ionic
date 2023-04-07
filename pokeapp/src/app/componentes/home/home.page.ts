import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private pokemonService: PokemonServiceService) {
   this.pokemonService.buscarPokemons()
    .subscribe({
     next:(pokemons: any) => {
     console.log(pokemons)
       },
      error:(erro) => {
        console.error(erro)
      }
    })

  }

  // ngOnInit(): void {
  //   this.loadPokemon();
  // }

  // loadPokemon(){
  //   this.pokemonService.buscarPokemons(0).subscribe(res => {
  //     console.log(res)
  //   })
 
  cards = [{
    id: 1,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    name : "",
    alt: ""
   
  }];





}
