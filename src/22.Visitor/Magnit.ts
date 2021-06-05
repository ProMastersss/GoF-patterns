import { Product } from "../21.TemplateMethod/Product";
import { Shop } from "./Shop";
import { Visitor } from "./Visitor";

export class Magnit implements Shop {
  private products: Product[] = [
    new Product("Конфетка", 600),
    new Product("Мороженое", 80),
    new Product("Молоко", 95)
  ];

  buy(number: number): Product {
    if (this.products[number]) {
      return this.products[number];
    }

    throw new Error("Такого товара нет");
  }

  accept(v: Visitor): void {
    v.visitMagnit(this);
  }
}
