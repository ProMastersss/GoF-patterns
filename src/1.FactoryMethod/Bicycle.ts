import { Transport } from "./Transport";

export class Bicycle extends Transport {
  constructor(private wheal1: boolean, private wheal2: boolean) {
    super("Велосипед");
  }

  drive(): string {
    if (this.wheal1) {
      console.log("Колесо 1 установлено");
    } else {
      console.log("Колеса 1 нету");
    }

    if (this.wheal2) {
      console.log("Колесо 2 установлено");
    } else {
      console.log("Колеса 2 нету");
    }

    if (this.wheal1 && this.wheal2) {
      return this.name + ": Поехали!";
    } else {
      return this.name + ": Не можем ехать";
    }
  }
}
