import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  showShoppingList = false;

  recipes: Observable<any>;

  constructor(private dataService: DataService) {}

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

  onShowShoppingList() {
    this.showShoppingList = !this.showShoppingList;
  }

}
