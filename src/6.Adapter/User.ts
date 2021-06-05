import { IAdapter } from "./IAdapter";

export class User {
  operation(service: IAdapter): number {
    return service.calculate();
  }
}
