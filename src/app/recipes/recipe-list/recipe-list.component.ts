import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: ['../../styles.css']
})

export class RecipeListComponent implements OnInit {

  //assigning the variable to type Recipe, and the brackets indicate it's an array
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
