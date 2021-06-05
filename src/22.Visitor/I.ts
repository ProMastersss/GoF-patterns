import { Magnit } from "./Magnit";
import { Pyaterka } from "./Pyaterka";
import { Visitor } from "./Visitor";

export class I implements Visitor {
  visitMagnit(s: Magnit): void {
    const product = s.buy(0);
    console.log("Купил в магните " + product.name);
  }

  visitPyaterka(s: Pyaterka): void {
    const product = s.buy(1);
    console.log("Купил в пятерке " + product.name);
  }
}
