import { Product } from "./Product";

export class BoxOffice {
  private products: Product[];

  constructor(...products: Product[]) {
    this.products = products;
  }

  getName(product: Product): string {
    return product.name;
  }

  getCost(product: Product): number {
    return product.cost * this.discount();
  }

  discount(): number {
    return 1;
  }

  amount(): number {
    let amount = 0;

    this.products.forEach((p: Product) => {
      const cost = this.getCost(p);

      console.log(this.getName(p) + " " + cost);
      amount += cost;
    });

    return amount;
  }
}
