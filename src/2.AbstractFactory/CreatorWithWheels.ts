import { Bicycle } from "../1.FactoryMethod/Bicycle";
import { Car } from "../1.FactoryMethod/Car";
import { Monowheel } from "../1.FactoryMethod/Monowheel";
import { AbstractFactory } from "./AbstractFactory";

export class CreatorWithWheels implements AbstractFactory {
  createMonowheel(): Monowheel {
    return new Monowheel(true);
  }

  createBicycle(): Bicycle {
    return new Bicycle(true, true);
  }

  createCar(): Car {
    return new Car(true, true, true, true);
  }
}
