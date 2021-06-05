import { I } from "./I";
import { Product } from "./Products/Product";

export interface Handler {
  buy(i: I): void;
  setNextProduct(product: Product): void;
}
