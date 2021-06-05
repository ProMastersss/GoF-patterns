export abstract class Subscriber {
  protected number: number = 0;

  // Моя очередь?
  hasMyTurn(number: number): boolean {
    if (this.number === number) {
      this.action();

      return true;
    }

    return false;
  }

  abstract action(): void;
}
