import { Calculator } from "./Calculator";
import { IAdapter } from "./IAdapter";

export class Adapter implements IAdapter {
  constructor(private service: Calculator) {}

  calculate(): number {
    return this.service.calc();
  }
}
