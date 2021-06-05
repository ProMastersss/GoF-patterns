import { Factory } from "../Factory";
import { Monowheel } from "../Monowheel";
import { Object } from "../Object";

export class MonowheelCreator implements Factory {
  create(): Object {
    return new Monowheel(true);
  }
}
