import { Employee } from "./Employee";

export class Department {
  public employees: Employee[] = [];

  add(employee: Employee): void {
    this.employees.push(employee);
  }
}
