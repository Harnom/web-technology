import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeManagementService {

  constructor() { }

  addItem (item) {
   if(this.contents.find(i => i.name === item.name)){
     this.contents.find(i => i.name === item.name).quantity += this.contents.find(i => i.name === item.name).quantity
   } else{
     this.contents.push(item);
   }
 }

 removeItem (item, itemAmount) {
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

}
