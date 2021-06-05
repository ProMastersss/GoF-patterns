import { Strategy } from "./Strategy";

export class PHP implements Strategy {
  execute(filename: string): string {
    return filename + ".php";
  }
}
