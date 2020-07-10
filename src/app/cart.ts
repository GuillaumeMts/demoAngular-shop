import { Product } from "./product"

export class Cart {
  product: Product;
  quantity : number;
  totalPrice : number;

  constructor(item: Product)
  {
    this.product = item;
  }
}
