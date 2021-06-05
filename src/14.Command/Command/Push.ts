import { Command } from "./Command";

export class Push extends Command {
  execute(): void {
    this.receiver.push();
  }
}
