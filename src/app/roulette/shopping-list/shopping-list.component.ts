import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

// import { DataService } from '../../data.service';
import { Recipe } from '../../shared/interfaces'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  header?: string;
  isStrikethrough = false;
  // recipes: Observable<any>;
  // ingredients: Recipe[] = [];
  @Input() chosenRecipe: Observable<any[]>;

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
