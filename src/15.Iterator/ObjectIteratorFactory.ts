import { Iterator } from "./Iterator";
import { IteratorFactory } from "./IteratorFactory";
import { MyObject } from "./MyObject";
import { ObjectIterator } from "./ObjectIterator";

export class ObjectIteratorFactory implements IteratorFactory {
  create(object: MyObject): Iterator {
    return new ObjectIterator(object);
  }
}
