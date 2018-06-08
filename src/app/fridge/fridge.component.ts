import { Component, OnInit } from '@angular/core';

import { Item } from '../item.class';

import { RecipeManagementService } from '../recipe-management.service';


@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  public fridge: Item[];

  constructor(public recipeManagementService: RecipeManagementService) { }

  ngOnInit() {
  }

  add (item) {
    this.recipeManagementService.addItem();
 }

  remove (item, itemAmount) {
    this.recipeManagementService.removeItem();
 }

}
