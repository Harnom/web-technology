import { Injectable } from '@angular/core';

import { Item } from './item.class';
import { Fridge } from './fridge.class';
import { Recipe } from './recipe.class';

import { RecipeHandlingComponent } from './recipe-handling/recipe-handling.component';
import { FridgeComponent } from './fridge/fridge.component';


@Injectable({
  providedIn: 'root'
})
export class RecipeManagementService {

  public fridge: Fridge;
  public shoppingList: Array<Item> = [];
  public alreadyList: Array<Item> = [];

  shoppingList: Array<Item> = [];
  alreadyList: Array<Item> = [];

  item1 = new Item("Apple", 3);
  item2 = new Item("Apple", 4);
  item3 = new Item("Lime", 1);
  item4 = new Item("Eggs", 1);

  recipeList : Array<Recipe> =[];

  public recipe = new Recipe([this.item1, this.item3, this.item4], this.instruction1, 10);

  recipeListIndex;

  constructor() {
    this.fridge = new Fridge();
    // this.contents = [];
    let item1 = new Item("Apple", 3);
    this.fridge.add(item1);

    this.recipeList = [this.recipe];
  }
// this.contents.find(i => i.name === item.value).quantity
  addItem (item, quantity) {
    let newItem = new Item(item.value, quantity.value);
   if(this.fridge.contents.find(i => i.name === item.value)){
     this.fridge.contents.find(i => i.name === item.value).quantity += parseInt(quantity.value);
   } else{
     this.fridge.contents.push(newItem);
   }
 }

 removeItem (item, itemAmount) {
   let index = -1
   // this.contents.find((i, idx) => i.name === item.name ? index = idx : null);
   // this.contents[index].quantity -= itemAmount;
   this.fridge.contents.find(i => i.name === item.value).quantity -= parseInt(itemAmount.value);

   if(item.quantity < 0){
     if(index > -1){
       this.fridge.contents.splice(index, 1);
     }
   }
}

  setIndex (recipeListIndex) {
    this.recipeListIndex = recipeListIndex;
  }

 checkRecipe () {
   let checkRecipeArray = [];

   checkRecipeArray = this.fridge.checkRecipe(this.recipeList[this.recipeListIndex]);

   this.shoppingList = checkRecipeArray["shoppingList"];
   this.alreadyList = checkRecipeArray["alreadyList"];
  // return { "shoppingList": shoppingList, "alreadyList": alreadyList };
}

}
