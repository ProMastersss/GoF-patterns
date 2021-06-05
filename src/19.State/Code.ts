import { State } from "./State";
import { Valid } from "./Valid";

export class Code {
  private state: State = new Valid();

  constructor(public code: string) {}

  changeState(s: State): void {
    this.state = s;
  }

  check(): void {
    this.state.show();
  }
}
