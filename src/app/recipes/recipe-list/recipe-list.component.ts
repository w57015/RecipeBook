import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test',
     'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg' ),

    new Recipe('Test', 'This is a another test',
     'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
