import { State } from "./State";

export class Warning implements State {
  show(): void {
    console.warn("Warning");
  }
}
