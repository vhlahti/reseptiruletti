import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  // form handler

  rouletteForm = new FormGroup({
    roulette: new FormControl('')
  });

  // button handler

  onSubmit() {
  console.warn(this.rouletteForm.value);
  }

  // recipe data

  recipes: Recipe[] = recipeData;
  //lisää filtteri ruokavalion mukaan
  //random
  selected: Recipe = this.recipes[0]; 
}
