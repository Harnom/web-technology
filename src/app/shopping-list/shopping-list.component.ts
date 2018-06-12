import { Component, OnInit } from '@angular/core';

import { Item } from '../item.class';
import { Fridge } from '../fridge.class';
import { Recipe } from '../recipe.class';

import { RecipeManagementService } from '../recipe-management.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public fridge: Fridge;

  item1 = new Item("Apple", 3);
  item2 = new Item("Apple", 4);
  item3 = new Item("Lime", 1);
  item4 = new Item("Eggs", 1);

  public recipe = new Recipe([this.item1, this.item3, this.item4], this.instruction1, 10);

  constructor(public recipeManagementService: RecipeManagementService) {
    this.fridge = new Fridge();
    let item1 = new Item("Apple", 3);
    this.fridge.add(item1);
    // console.log(this.fridge);
  }

  ngOnInit() {
  }

}
