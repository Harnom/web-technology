import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeHandlingComponent } from './recipe-handling/recipe-handling.component';
import { FormsModule } from '@angular/Forms';
import { FridgeComponent } from './fridge/fridge.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RecipeManagementService } from './recipe-management.service';



@NgModule({
  declarations: [
    AppComponent,
    RecipeHandlingComponent,
    FridgeComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
