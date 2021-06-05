import { Transport } from "./Transport";

export class Car extends Transport {
  constructor(
    private wheal1: boolean,
    private wheal2: boolean,
    private wheal3: boolean,
    private wheal4: boolean
  ) {
    super("Машина");
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

    if (this.wheal3) {
      console.log("Колесо 3 установлено");
    } else {
      console.log("Колеса 3 нету");
    }

    if (this.wheal4) {
      console.log("Колесо 4 установлено");
    } else {
      console.log("Колеса 4 нету");
    }

    if (this.wheal1 && this.wheal2 && this.wheal3 && this.wheal4) {
      return this.name + ": Поехали!";
    } else {
      return this.name + ": Не можем ехать";
    }
  }
}
