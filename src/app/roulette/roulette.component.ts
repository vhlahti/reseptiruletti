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
      roulette: ['', Validators.required]
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

  if (this.rouletteForm.value.roulette === 'meat')
  {

    // look through all the recipes and find those that correspond chosen value
    // choose a random id from the value's recipe pool and save it as randomId

    this.recipes.pipe(
      map(items => items.filter(item => item.id.toString().startsWith("1"))),
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
  if (this.rouletteForm.value.roulette === 'fish')
  {
    this.recipes.pipe(
      map(items => items.filter(item => item.id.toString().startsWith("2"))),
      map(filteredItems => {
        const randomIndex = Math.floor(Math.random() * filteredItems.length);
        return filteredItems[randomIndex].id;
      })
    ).subscribe(randomId => {
      this.randomId = randomId;
      console.log(randomId);
      this.chosenRecipe = this.recipes.pipe(
        map(items => items.filter(item => item.id === randomId))
      );
      this.chosenRecipe.subscribe(recipes => console.log(recipes));
    });
  }
  if (this.rouletteForm.value.roulette === 'vege')
  {
    this.recipes.pipe(
      map(items => items.filter(item => item.id.toString().startsWith("3"))),
      map(filteredItems => {
        const randomIndex = Math.floor(Math.random() * filteredItems.length);
        return filteredItems[randomIndex].id;
      })
    ).subscribe(randomId => {
      this.randomId = randomId;
      console.log(randomId);
      this.chosenRecipe = this.recipes.pipe(
        map(items => items.filter(item => item.id === randomId))
      );
      this.chosenRecipe.subscribe(recipes => console.log(recipes));
    });
  }
  if (this.rouletteForm.value.roulette === 'vegan')
  {
    this.recipes.pipe(
      map(items => items.filter(item => item.id.toString().startsWith("4"))),
      map(filteredItems => {
        const randomIndex = Math.floor(Math.random() * filteredItems.length);
        return filteredItems[randomIndex].id;
      })
    ).subscribe(randomId => {
      this.randomId = randomId;
      console.log(randomId);
      this.chosenRecipe = this.recipes.pipe(
        map(items => items.filter(item => item.id === randomId))
      );
      this.chosenRecipe.subscribe(recipes => console.log(recipes));
    });
  }
  }
}
