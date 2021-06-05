import { Subscriber } from "./Subscriber";

export class Registrator {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber): void {
    const index = this.subscribers.findIndex(
      (s: Subscriber) => s === subscriber
    );

    this.subscribers.splice(index, 1);
  }

  declare(): void {
    let index = 0;
    const count = this.subscribers.length;

    while (index < count) {
      const number = index;

      setTimeout(() => {
        this.notify(number);
      }, index * 5000);

      index++;
    }
  }

  private notify(index: number): void {
    console.log("Клиент номер: " + index);

    const state = this.subscribers.some((s: Subscriber) => s.hasMyTurn(index));

    if (!state) {
      console.log("Нету? Следующий!");
    }
  }
}
