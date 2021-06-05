import { Employee } from "./Employee";

export abstract class Department {
  constructor(protected employee: Employee) {}

  abstract work(): void;
}
