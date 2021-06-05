import { Packaging } from "./Packaging";

export class Product implements Packaging {
  open(): void {
    console.log("Достали товар");
  }
}
