export abstract class Employee {
  protected name: string = "Кто то";
  protected skills: string[] = [];

  getName(): string {
    return this.name;
  }

  getSkills(): string[] {
    return this.skills;
  }
}
