import { Magnit } from "./Magnit";
import { Pyaterka } from "./Pyaterka";

export interface Visitor {
  visitPyaterka(shop: Pyaterka): void;
  visitMagnit(shop: Magnit): void;
}
