import { Transport } from "./Transport";

export class Monowheel extends Transport {
  constructor(private wheal1: boolean) {
    super("Моноколесо");
  }

  drive(): string {
    if (this.wheal1) {
      console.log("Колесо 1 установлено");
      return this.name + ": Поехали!";
    } else {
      console.log("Колеса 1 нету");
      return this.name + ": Не можем ехать";
    }
  }
}
