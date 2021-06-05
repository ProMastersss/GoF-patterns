import { State } from "./State";

export class Valid implements State {
  show(): void {
    console.info("Валидный!");
  }
}
