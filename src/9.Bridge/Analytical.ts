import { Department } from "./Department";

export class Analytical extends Department {
  work() {
    const skills = this.employee.getSkills();
    const name = this.employee.getName();

    if (skills.some((skill) => skill === "python")) {
      console.log(name + " выполняет работу аналитика!");
    } else {
      console.log(name + " не умеет работать аналитиком :(");
    }
  }
}
