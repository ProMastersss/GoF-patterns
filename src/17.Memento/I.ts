import { History } from "./History";
import { Random } from "./Random";

export class I {
  private random: Random;
  private history: History;

  constructor() {
    this.random = new Random();
    this.history = new History(this.random);
  }

  determineThreeNumber(): void {
    this.random.generate();
    console.log(this.getNumber());
    this.history.save();

    this.random.generate();
    console.log(this.getNumber());
    this.history.save();

    this.random.generate();
    console.log(this.getNumber());
    this.history.save();
  }

  rememberNumber(step: number): void {
    this.history.pull(step);
  }

  getNumber(): number {
    return this.random.getNumber();
  }
}
