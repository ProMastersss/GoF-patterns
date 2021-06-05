import { Console } from "../Console";

export abstract class Command {
  constructor(protected receiver: Console) {}

  abstract execute(): void;
}
