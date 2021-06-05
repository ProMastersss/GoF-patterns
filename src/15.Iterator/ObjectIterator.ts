import { Iterator } from "./Iterator";
import { MyObject } from "./MyObject";

export class ObjectIterator implements Iterator {
  private index: number = 1;
  constructor(private object: MyObject) {}

  next(): void {
    if (this.has()) {
      this.object["method" + this.index]();
      this.index += 1;
    } else {
      this.done();
    }
  }

  has(): boolean {
    return !!this.object["method" + this.index];
  }

  done(): void {
    console.log("Конец");
  }
}
