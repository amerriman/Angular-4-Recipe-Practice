import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: ['../../styles.css']
})
export class RecipeListComponent {
  //assigning the variable to type Recipe, and the brackets indicate it's an array
  recipes: Recipe[] = [
    new Recipe('Tomato Soup', 'A creamy tomato soup that goes perfectly with grilled cheese', 'http://www.harvesttotable.com/wp-content/uploads/2007/09/Tomato-soup-with-basil.jpg'),
    new Recipe('Cereal', "Lazy Man's Feast", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Froot-Loops-Cereal-Bowl.jpg/220px-Froot-Loops-Cereal-Bowl.jpg")
  ];

}
