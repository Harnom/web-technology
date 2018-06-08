import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { Item } from '../item.class';

import { RecipeManagementService } from '../recipe-management.service';


@Component({
  selector: 'app-recipe-handling',
  templateUrl: './recipe-handling.component.html',
  styleUrls: ['./recipe-handling.component.css']
})
export class RecipeHandlingComponent implements OnInit {

  item1 = new Item("Apple", 3);
  item2 = new Item("Apple", 4);
  item3 = new Item("Lime", 1);
  item4 = new Item("Eggs", 1);

  instruction1 = ["Break the eggs", "Put it in the fryer"];

  recipe1 : Recipe;
  recipeList : Array<Recipe> =[];
  recipe: Recipe;


  // ingredients = "";
  // ingredientsArray = [];
  // instructions = "";
  // estimated_time = "";

  index: number;
  showForm: boolean = false;


  //---------


  constructor(public recipeManagementService: RecipeManagementService) {
    this.recipe1 = new Recipe([this.item1, this.item3, this.item4], this.instruction1, 10);
  }

  ngOnInit() {
    this.recipeList.push(this.recipe1);
  }

  editRecipe(){
    this.recipe = this.recipeList[this.index];
    this.showForm = true;
  }

  newRecipe(){
    this.recipe = new Recipe([], [], 0);
    this.showForm = true;
  }

  saveRecipe(): void {
    this.recipeList.push(this.recipe);
  }

  deleteRecipe(): void {
    this.recipeList.splice(this.index, this.index + 1);
  }

  setIndex(index): void{
    this.index = index;
  }

  addIngredient(name, quantity): void {
    let newItem = new Item(name.value, quantity.value);
    this.recipe.addItem(newItem);
    name.value = "";
    quantity.value = "";
  }

  addInstruction(instruction): void {
    this.recipe.addInstruction(instruction.value);
    // instruction.value = "";
  }

  setEstimatedTime(estimatedTime): void {
    this.recipe.setEstimatedTime(estimatedTime.value);
    // instruction.value = "";
  }

}
