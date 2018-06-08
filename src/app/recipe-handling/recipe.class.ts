import { Item } from './item.class';

export class Recipe {

 items: Array<Item>;
 instructions: Array<string>;
 estimatedTime: number;

  constructor(items, instructions, estimatedTime) {

    this.items = items;
    this.instructions = instructions;
    this.estimatedTime = estimatedTime;
  }

   addItem (item) {
    this.items.push(item);
  }

   addInstruction (instruction) {
    this.instructions.push(instruction);
  }

  setEstimatedTime (estimatedTime) {
   this.estimatedTime = estimatedTime;
 }

}
