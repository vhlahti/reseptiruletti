import { Component } from '@angular/core';
import { faClover } from '@fortawesome/free-solid-svg-icons';
import recipeData from 'src/assets/json/testi.json';

interface Recipe {
  id: Number;
  name: String; 
  ruokavalio: String;
  ohje: String;
  valmistusaika: String;
  ainekset: String[];
}

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent {
  faClover = faClover;

  recipes: Recipe[] = recipeData;
  //lisää filtteri ruokavalion mukaan
  //random
  selected: Recipe = this.recipes[0]; 
}
