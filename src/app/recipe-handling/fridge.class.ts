import { Item } from './item.class';
import { Recipe } from './recipe.class';

export class Fridge {

  public contents: Item[];

  constructor() {
    this.contents = [];
  }

   add (item) {
    if(this.contents.find(i => i.name === item.name)){
      this.contents.find(i => i.name === item.name).quantity += this.contents.find(i => i.name === item.name).quantity
    } else{
      this.contents.push(item);
    }
  }

   remove (item, itemAmount) {
     let index = -1
     // this.contents.find((i, idx) => i.name === item.name ? index = idx : null);
     // this.contents[index].quantity -= itemAmount;
     this.contents.find(i => i.name === item.name).quantity -= itemAmount;
     if(item.quantity < 0){
       if(index > -1){
         this.contents.splice(index, 1);
       }
     }
  }

//   function checkRecipe (recipe) {
//     let shoppingList: Array<Item> = [];
//     let alreadyList: Array<Item> = [];
//
//     recipe.ingredients.forEach(a => {
//       if(contents.contains(a)){
//         alreadyList.push(a);
//         if(contents.find(b => b.name == a.name && b.quantity < a.quantity)){
//           a.quantity = b.quantity - a.quantity;
//           shoppingList.push(a);
//         }
//       }else{
//         shoppingList.push(a);
//       }
//     })
//
//     return { "shoppingList": shoppingList, "alreadyList": alreadyList };
//   }
 }
