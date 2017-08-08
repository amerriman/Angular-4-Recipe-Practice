import { Component } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: ['../../styles.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatos', 5),
    new Ingredient('Sour Cream', 1)

  ];
}
