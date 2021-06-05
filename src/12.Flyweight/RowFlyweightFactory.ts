import { Cell } from "./Cell";
import { FlyweightFactory } from "./FlyweightFactory";
import { Row } from "./Row";

export class RowFlyweightFactory implements FlyweightFactory {
  private state: Row[] = [];

  create(value: Cell[]): Row {
    let row = this.state.find((row: Row) =>
      row.value.every(
        (cell: Cell, index: number) => cell.value === value[index].value
      )
    );

    if (!row) {
      row = new Row(value);
      this.state.push(row);
    }

    return row;
  }

  getUniqueCount(): number {
    return this.state.length;
  }
}
