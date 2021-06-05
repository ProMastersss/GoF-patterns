import { Random } from "./Random";
import { Snapshot } from "./Snapshot";

export class History {
  private history: Snapshot[] = [];
  constructor(private random: Random) {}

  save(): void {
    const snapshot = this.random.makeSnapshot();
    this.history.push(snapshot);
  }

  pull(step: number): void {
    const snapshot = this.history.find(
      (snapshot: Snapshot) => snapshot.getStep() === step
    );

    if (snapshot) {
      this.random.restore(snapshot);
    } else {
      console.log("Шаг не найден");
    }
  }
}
