import { Factory } from "./Factory";
import { Transport } from "./Transport";

export class Human {
  private transport: Transport;

  constructor(private transportCreator: Factory) {
    this.transport = transportCreator.create();
  }

  go(): string {
    return this.transport.drive();
  }
}
