import { Iterator } from "./Iterator";
import { MyObject } from "./MyObject";

export interface IteratorFactory {
  create(object: MyObject): Iterator;
}
