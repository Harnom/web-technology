import { Component, OnInit } from '@angular/core';

import { Item } from '../item.class';
import { Fridge } from '../fridge.class';

import { RecipeManagementService } from '../recipe-management.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public fridge: Fridge;

  constructor(public recipeManagementService: RecipeManagementService) {
    this.fridge = new Fridge();
    let item1 = new Item("Apple", 3);
    this.fridge.add(item1);
    console.log(this.fridge);
  }

  ngOnInit() {

  }

}
