import { AbstractFactory } from "./AbstractFactory";
import { Transport } from "../1.FactoryMethod/Transport";

export class Human {
  private transport: Transport;

  constructor(private transportCreator: AbstractFactory) {}
  stanOnMonowheel() {
    this.transport = this.transportCreator.createMonowheel();
  }

  getOnBicycle() {
    this.transport = this.transportCreator.createBicycle();
  }

  getOnCar() {
    this.transport = this.transportCreator.createCar();
  }

  go(): string {
    return this.transport.drive();
  }
}
