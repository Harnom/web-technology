import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/Forms';


import { Item } from './item.class';
import { Recipe } from './recipe.class';
import { Fridge } from './fridge.class';
import { RecipeHandlingComponent } from './recipe-handling/recipe-handling.component';

 let item1 = new Item("Apple", 3);
 let item2 = new Item("Apple", 4);
 let item3 = new Item("Lime", 1);
 let item4 = new Item("Eggs", 1);

 let instruction1 = ["Break the eggs", "Put it in the fryer"];
 let instruction2 = "Pour on your plate";

 let recipe1 = new Recipe([item1, item3, item4], instruction1, 10);

 let fridge = new Fridge();

describe('Item', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:[AppComponent, RecipeHandlingComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));


   it("Adding Item", function() {
    item1.add(item2);
    expect(item1.quantity).toBe(5);
   });

   it("Adding Wrong Item", function() {
    item1.add(item3);
    expect(item1.quantity).toBe(5);
   });

   it("Subtract Item", function() {
    item1.subtract(item2);
    expect(item1.quantity).toBe(3);
   });

   it("Subtract Wrong Item", function() {
    item1.subtract(item3);
    expect(item1.quantity).toBe(3);
   });
});

describe('Recipe', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RecipeHandlingComponent
      ],
      imports: [
        FormsModule]
    }).compileComponents();
  }));


   it("Adding Item to Recipe", function() {
     recipe1.addItem(item2);
     expect(recipe1.items.length).toBe(4);
   });

   it("Adding Instruction to Recipe", function() {
     recipe1.addInstruction(instruction2);
     expect(recipe1.items.length).toBe(4);
   });
});

describe('Fridge', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RecipeHandlingComponent
      ],
      imports: [
        FormsModule]
    }).compileComponents();
  }));

   it("Adding Item to the Fridge", function() {
     fridge.add(item1);
     expect(fridge.contents.length).toBe(1);
   });

   it("Adding the same item to the Fridge", function() {
     fridge.add(item1);
     expect(fridge.contents).toContain(new Item("Apple", 6));
   });

   it("Removing Item to the Fridge", function() {
     fridge.remove(item1, 2);
     expect(fridge.contents).toContain(new Item("Apple", 4));
   });

   // it("Checking the Recipe", function() {
   //   let recipe2 = new Recipe([item1, item3, item4], instruction1, 10);
   //   let lists = fridge.checkRecipe(recipe2);
   //   console.log(lists);
   //   expect(fridge.contents).toContain(new Item("Apple", 4));
   //
   // });
});
