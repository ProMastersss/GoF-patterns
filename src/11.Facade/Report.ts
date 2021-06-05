import { Analytical } from "./Analytical";
import { Employee } from "./Employee";
import { Support } from "./Support";
import { Accountancy } from "./Accountancy";

export class Report {
  generate(): string {
    const support = new Support();
    support.add(new Employee("Misha"));

    const analytical = new Analytical();
    analytical.add(new Employee("Vlad"));

    const accountancy = new Accountancy(support, analytical);

    return accountancy.amount();
  }
}
