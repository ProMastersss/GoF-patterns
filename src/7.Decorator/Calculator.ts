import { ICalculate } from "./ICalculate";

export class Calculator implements ICalculate {
  constructor(private x: number, private y: number) {}

  calculate(): number {
    return this.x + this.y;
  }
}
