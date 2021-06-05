import { State } from "./State";

export class Error implements State {
  show(): void {
    console.error("Ошибка");
  }
}
