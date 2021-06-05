import { Director } from "./Director";
import { IEmployee } from "./IEmployee";

export class ZamDirector implements IEmployee {
  constructor(private director: Director) {}

  private checkDirector(): boolean {
    return this.director.online;
  }

  resolveIssue(): void {
    if (this.checkDirector()) {
      this.director.resolveIssue();
    } else {
      console.log("Вопросом занялся Зам директора");
    }
  }
}
