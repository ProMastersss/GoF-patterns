export class Calculator {
  constructor(private x: number, private y: number) {}

  calc(): number {
    return this.x + this.y;
  }
}
