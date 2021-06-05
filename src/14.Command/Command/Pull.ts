import { Command } from "./Command";

export class Pull extends Command {
  execute(): void {
    this.receiver.pull();
  }
}
