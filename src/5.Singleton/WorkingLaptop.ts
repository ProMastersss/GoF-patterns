export class WorkingLaptop {
  private static laptop: WorkingLaptop;

  static take(): WorkingLaptop {
    if (!WorkingLaptop.laptop) {
      WorkingLaptop.laptop = new WorkingLaptop();
    }

    return WorkingLaptop.laptop;
  }
}
