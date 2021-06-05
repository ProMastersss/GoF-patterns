import { Department } from "./Department";
import { Employee } from "./Employee";

// Бухгалтерия
export class Accountancy {
  // Зарплаты
  private salaries: Record<string, number> = { Misha: 6000, Vlad: 150000 };
  private departaments: Department[];

  constructor(...departaments: Department[]) {
    this.departaments = departaments;
  }

  amount(): string {
    let acc = 0;

    this.departaments.forEach((dep: Department) => {
      dep.employees.forEach((employee: Employee) => {
        if (this.salaries[employee.name]) {
          acc += this.salaries[employee.name];
        }
      });
    });

    return acc.toString();
  }
}
