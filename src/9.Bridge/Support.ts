import { Department } from "./Department";

export class Support extends Department {
  work() {
    const skills = this.employee.getSkills();
    const name = this.employee.getName();

    if (skills.some((skill) => skill === "manager")) {
      console.log(name + " выполняет работу поддержки!");
    } else {
      console.log(name + " не умеет работать в отделе поддержки :(");
    }
  }
}
