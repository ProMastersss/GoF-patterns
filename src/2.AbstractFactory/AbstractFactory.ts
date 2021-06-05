import { Monowheel } from "../1.FactoryMethod/Monowheel";
import { Bicycle } from "../1.FactoryMethod/Bicycle";
import { Car } from "../1.FactoryMethod/Car";

export interface AbstractFactory {
  createMonowheel(): Monowheel;
  createBicycle(): Bicycle;
  createCar(): Car;
}
