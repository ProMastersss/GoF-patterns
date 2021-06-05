import { Memento } from "./Memento";
import { Snapshot } from "./Snapshot";

export class Random {
  private number: number = -1;
  private step: number = 0;

  generate(): void {
    this.number = Math.random();
    this.step += 1;
  }

  makeSnapshot(): Snapshot {
    return new Snapshot(this.number, this.step);
  }

  restore(memento: Memento): void {
    this.number = memento.getNumber();
    this.step = memento.getStep();
  }

  getNumber(): number {
    return this.number;
  }
}
