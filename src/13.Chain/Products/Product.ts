import { Handler } from "../Handler";
import { I } from "../I";

export abstract class Product implements Handler {
  private nextProduct: Product | null = null;
  protected cost: number = 0;

  setNextProduct(product: Product): void {
    this.nextProduct = product;
  }

  buy(i: I): void {
    if (i.amountMoney - this.cost > 0) {
      i.amountMoney -= this.cost;
      console.log("Купил " + this.constructor.name);

      if (this.nextProduct) {
        this.nextProduct.buy(i);
      }
    } else {
      console.log("Не хватает средств для покупки " + this.constructor.name);
    }
  }
}
