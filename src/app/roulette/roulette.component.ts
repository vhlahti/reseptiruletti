import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {

  recipes: Observable<any>;
  randomId: number;
  chosenRecipe: Observable<any[]>;

  // form handler

  rouletteForm: FormGroup;

  constructor(private dataService: DataService,
              public fb: FormBuilder) {
    this.rouletteForm = fb.group({
      roulette: ['', Validators.required],
      budjetti: ['', Validators.required]
    });
  }

  // get all recipes

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipes = this.dataService.getAllRecipes();
    (error) => {
      console.log('http-error:');
      console.log(error);
    };
  }

  // button handler
  // the function filters the recipes and extracts the chosen content into chosenRecipe array

  onSubmit() {

  // log which value (meat/fish/vege/vegan) user selected

  console.log(this.rouletteForm.value);

  // filter recipes by id starting number
  // choose a random id from the value's recipe pool and save it as randomId

  let startingNumber: string;
  switch (this.rouletteForm.value.roulette) {
    case 'meat':
      startingNumber = '1';
      break;
    case 'fish':
      startingNumber = '2';
      break;
    case 'vege':
      startingNumber = '3';
      break;
    case 'vegan':
      startingNumber = '4';
      break;
  }

  let budgetFilter: string;
  switch (this.rouletteForm.value.budjetti) {
    case '€':
      budgetFilter = '€';
      break;
    case '€€':
      budgetFilter = '€€';
      break;
    case '€€€':
      budgetFilter = '€€€';
      break;
  }

  this.recipes.pipe(
    map(items => items.filter(item => item.id.toString().startsWith(startingNumber))),
    map(filteredItems => filteredItems.filter(item => item.budjetti === budgetFilter)),
    map(filteredItems => {
      const randomIndex = Math.floor(Math.random() * filteredItems.length);
      return filteredItems[randomIndex].id;
    })
  ).subscribe(randomId => {
    this.randomId = randomId;
    console.log(randomId);

  // extract the referenced id object (recipe) and save it as chosenRecipe

  this.chosenRecipe = this.recipes.pipe(
    map(items => items.filter(item => item.id === randomId))
  );

  // subscribe to the chosenRecipe observable to retrieve the recipe

  this.chosenRecipe.subscribe(recipes => console.log(recipes));

  });
  }

}
