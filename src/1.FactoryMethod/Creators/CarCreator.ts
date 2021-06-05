import { Car } from "../Car";
import { Factory } from "../Factory";
import { Object } from "../Object";

export class CarCreator implements Factory {
  create(): Object {
    return new Car(true, false, true, true);
  }
}
