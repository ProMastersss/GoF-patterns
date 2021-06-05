import { Code } from "./Code";
import { Error } from "./Error";
import { Valid } from "./Valid";
import { Warning } from "./Warning";

export class IDE {
  constructor(private code: Code) {}

  compile(): void {
    switch (true) {
      case !this.code.code.includes(";"):
        this.code.changeState(new Error());
        break;

      case this.code.code.includes("1"):
        this.code.changeState(new Warning());
        break;

      default:
        this.code.changeState(new Valid());
    }

    this.code.check();
  }
}
