import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() chosenRecipe: Observable<any[]>;
  showShoppingList = false;

  constructor() {
    this.showShoppingList = false;
  }

  ngOnInit(): void {}

  onShowShoppingList() {
    this.showShoppingList = !this.showShoppingList;
  }
  

}
