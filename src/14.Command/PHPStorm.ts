import { Command } from "./Command/Command";

export class PHPStorm {
  constructor(private comands: Command[]) {}

  executeComands(): void {
    this.comands.forEach((command: Command) => command.execute());
  }
}
