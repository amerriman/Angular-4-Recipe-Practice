import { Component, Input } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: ['../../styles.css']
})
export class RecipeDetailComponent {

  @Input() recipe: Recipe;

  constructor() {}

}
