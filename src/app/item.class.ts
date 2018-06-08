export class Item {

   name: string;
   quantity: number;

  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

   add (item) {
    if(this.name == item.name){
      this.quantity += 2;
    }
  }

   subtract (item) {
    if(this.name == item.name){
      this.quantity -= 2;
    }


  }
}
