import { Subscriber } from "./Subscriber";

export class Human extends Subscriber {
  constructor(protected number: number) {
    super();
  }

  action(): void {
    console.log("Пошел на прием: " + this.number);
  }
}
