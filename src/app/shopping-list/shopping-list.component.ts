import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list, app-strikethrough',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  isStrikethrough = false;
}
