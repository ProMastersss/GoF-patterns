import { ADZ } from "./ADZ";
import { Mediator } from "./Mediator";
import { NewAPI } from "./NewAPI";

export class Pasha implements Mediator {
  private adz: ADZ;
  private api: NewAPI;

  constructor() {
    this.adz = new ADZ();
    this.api = new NewAPI();
  }

  notify(message: string): void {
    switch (message) {
      case "error":
        this.adz.fixCite();
        break;

      case "json": {
        this.api.fixApi();
        break;
      }

      default:
        console.log("Блин, кому бы подкинуть фикс бага?");
    }
  }
}
