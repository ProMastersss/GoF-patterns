import { Builder } from "./Builder";

export class Den implements Builder {
  implementSingleton() {
    console.log("Ден создал синглтон");
  }

  implementFactoryMethod() {
    console.log("Ден создал фабричный метод");
  }

  implementAbstractFactory() {
    console.log("Ден создал абстрактную фабрику");
  }
}
