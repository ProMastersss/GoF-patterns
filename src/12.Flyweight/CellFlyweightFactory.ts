import { Cell } from "./Cell";
import { FlyweightFactory } from "./FlyweightFactory";

export class CellFlyweightFactory implements FlyweightFactory {
  private state: Cell[] = [];

  create(value: 0 | 1): Cell {
    let cell = this.state.find((cell: Cell) => cell.value === value);

    if (!cell) {
      cell = new Cell(value);
      this.state.push(cell);
    }

    return cell;
  }

  getUniqueCount(): number {
    return this.state.length;
  }
}
