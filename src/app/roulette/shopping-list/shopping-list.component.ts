import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { Recipe } from '../../shared/interfaces'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  header?: string;
  isStrikethrough = false;
  recipes: Observable<any>;
  ingredients: Recipe[] = [];

  @Input() chosenRecipe: Observable<any[]>;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipes = this.dataService.getAllRecipes();
    this.recipes.subscribe(recipes => {
      this.ingredients = recipes[0].ainekset.map(ainekset => {
        return { name: ainekset, isStrikethrough: false };
      });
    });
  }
}
