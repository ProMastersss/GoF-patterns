import { ICalculate } from "./ICalculate";

export class Decorator {
  constructor(private calculator: ICalculate) {}

  calculate(): string {
    return this.calculator.calculate().toString();
  }
}
