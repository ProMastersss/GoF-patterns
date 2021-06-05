import { Product } from "../21.TemplateMethod/Product";
import { Visitor } from "./Visitor";

export class Pyaterka {
  private products: Product[] = [
    new Product("Конфетка", 500),
    new Product("Мороженое", 50),
    new Product("Молоко", 75)
  ];

  buy(number: number): Product {
    if (this.products[number]) {
      return this.products[number];
    }

    throw new Error("Такого товара нет");
  }

  accept(v: Visitor): void {
    v.visitPyaterka(this);
  }
}
