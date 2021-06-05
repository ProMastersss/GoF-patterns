import { Strategy } from "./Strategy";

export class JS implements Strategy {
  execute(filename: string): string {
    return filename + ".js";
  }
}
