import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from './recipe.model';
import {Ingredient} from './../shared/ingredient.model';
import {ShoppingListService} from "../list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tomato Soup',
      'A creamy tomato soup that goes perfectly with grilled cheese',
      'http://www.harvesttotable.com/wp-content/uploads/2007/09/Tomato-soup-with-basil.jpg',
      [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Milk', 1)
      ]),
    new Recipe(
      'Cereal',
      "Lazy Man's Feast",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Froot-Loops-Cereal-Bowl.jpg/220px-Froot-Loops-Cereal-Bowl.jpg",
      [
        new Ingredient('Fruit Loops', 163),
        new Ingredient('Milk', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[] ) {
    this.slService.addIngredients(ingredients);
  }

}
