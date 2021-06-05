import { Bicycle } from "../1.FactoryMethod/Bicycle";
import { Car } from "../1.FactoryMethod/Car";
import { Monowheel } from "../1.FactoryMethod/Monowheel";
import { AbstractFactory } from "./AbstractFactory";

export class CreatorWithoutWheels implements AbstractFactory {
  createMonowheel(): Monowheel {
    return new Monowheel(false);
  }

  createBicycle(): Bicycle {
    return new Bicycle(false, false);
  }

  createCar(): Car {
    return new Car(false, false, false, false);
  }
}
