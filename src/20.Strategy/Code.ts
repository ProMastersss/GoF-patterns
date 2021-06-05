import { Strategy } from "./Strategy";

export class Code {
  private strategy: Strategy | undefined;
  private filename: string | undefined;

  constructor(private code: string) {}

  setFileName(name: string): void {
    this.filename = name;
  }

  setExtencion(s: Strategy): void {
    this.strategy = s;
  }

  save() {
    if (this.filename && this.strategy) {
      console.log(
        "Файл " +
          this.filename +
          this.strategy.execute(this.filename) +
          " сохранен"
      );
    } else {
      throw new Error("Имя файла неопределенно");
    }
  }
}
