import { Visitor } from "./Visitor";

export interface Shop {
  accept(v: Visitor): void;
}
