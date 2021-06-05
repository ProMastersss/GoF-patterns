import { IEmployee } from "./IEmployee";

export class Director implements IEmployee {
  constructor(public online: boolean) {}

  resolveIssue(): void {
    console.log("Вопросом занялся директор");
  }
}
