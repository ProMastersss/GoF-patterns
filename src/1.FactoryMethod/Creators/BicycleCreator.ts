import { Bicycle } from "../Bicycle";
import { Factory } from "../Factory";
import { Object } from "../Object";

export class BicycleCreator implements Factory {
  create(): Object {
    return new Bicycle(true, true);
  }
}
