import { Memento } from "./Memento";

export class Snapshot implements Memento {
  constructor(private number: number, private step: number) {}

  getNumber(): number {
    return this.number;
  }

  getStep(): number {
    return this.step;
  }
}
