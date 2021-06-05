import { Builder } from "./Builder";

export class Misha implements Builder {
  implementSingleton() {
    console.log("Миша создал синглтон");
  }

  implementFactoryMethod() {
    console.log("Миша создал фабричный метод");
  }

  implementAbstractFactory() {
    console.log("Миша создал абстрактную фабрику");
  }
}
