import { Builder } from "./Builder";

export class TeamLead {
  constructor(private employee: Builder) {}

  implementArchitecture(): string {
    this.employee.implementSingleton();
    this.employee.implementFactoryMethod();
    this.employee.implementAbstractFactory();

    return "Реализована вся архитектура";
  }

  implementAllFactories(): string {
    this.employee.implementFactoryMethod();
    this.employee.implementAbstractFactory();

    return "Реализованы абстратная фабрика и фабричный метод";
  }

  implementSingleton(): string {
    this.employee.implementSingleton();

    return "Реализован синглтон (」°ロ°)";
  }
}
