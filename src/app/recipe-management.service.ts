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

  public contents: Item[];
  public shoppingList: Array<Item> = [];
  public alreadyList: Array<Item> = [];

  item1 = new Item("Apple", 3);
  item2 = new Item("Apple", 4);
  item3 = new Item("Lime", 1);
  item4 = new Item("Eggs", 1);

  public recipe = new Recipe([this.item1, this.item3, this.item4], this.instruction1, 10);

  constructor() {
    // this.fridge = [];
    this.contents = [];
    let item1 = new Item("Apple", 3);
    this.contents.push(item1);
  }
// this.contents.find(i => i.name === item.value).quantity
  addItem (item, quantity) {
    let newItem = new Item(item.value, quantity.value);
   if(this.contents.find(i => i.name === item.value)){
     this.contents.find(i => i.name === item.value).quantity += parseInt(quantity.value);
   } else{
     this.contents.push(newItem);
   }
 }

 removeItem (item, itemAmount) {
   let index = -1
   // this.contents.find((i, idx) => i.name === item.name ? index = idx : null);
   // this.contents[index].quantity -= itemAmount;
   this.contents.find(i => i.name === item.value).quantity -= parseInt(itemAmount.value);

   if(item.quantity < 0){
     if(index > -1){
       this.contents.splice(index, 1);
     }
   }
}

 checkRecipe (recipe) {
  let shoppingList: Array<Item> = [];
  let alreadyList: Array<Item> = [];

  recipe.ingredients.forEach(a => {
    if(contents.contains(a)){
      alreadyList.push(a);
      if(contents.find(b => b.name == a.name && b.quantity < a.quantity)){
        a.quantity = b.quantity - a.quantity;
        shoppingList.push(a);
      }
    }else{
      shoppingList.push(a);
    }
  })

  this.shoppingList = shoppingList;
  this.alreadyList = alreadyList;
  // return { "shoppingList": shoppingList, "alreadyList": alreadyList };
}

}
