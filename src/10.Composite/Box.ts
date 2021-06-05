import { Packaging } from "./Packaging";

export class Box implements Packaging {
  private boxes: Packaging[] = [];

  constructor(private company: string) {}

  add(packaging: Packaging): void {
    this.boxes.push(packaging);
  }

  open(): void {
    console.log("Открыл коробку " + this.company);
    this.boxes.forEach((packaging: Packaging) => packaging.open());
  }
}
