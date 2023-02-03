import { Component, OnInit } from '@angular/core';

import { AppModule } from '../app.module';
import { shoppingListTest } from '../shared/interfaces';

@Component({
  selector: 'app-shopping-list, app-strikethrough',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  header?: string;
  isStrikethrough = false;
  ingredients?: shoppingListTest[];
  isCollapsed = true;

  constructor() {}

  ngOnInit(): void {
    this.header = 'Sillisalaatti'
    this.ingredients = [
      { name: '666 grammaa silliä', isStrikethrough: false},
      { name: '6 perunaa', isStrikethrough: false},
      { name: '0.6 sipulia', isStrikethrough: false},
      { name: '6 tl smetanaa', isStrikethrough: false}
  ];
  }
}
