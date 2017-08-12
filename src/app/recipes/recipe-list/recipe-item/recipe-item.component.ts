import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../../../recipes/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: ['../../../styles.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  onSelected(){
    this.recipeSelected.emit();
  }

}