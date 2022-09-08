import { Employee } from "./Employee";
import { IEmployee } from "./IEmployee";

export class FullTimeEmployee extends Employee implements IEmployee {
  public salary: number;
  public bonus: number;
  public overtimeHours: number;

  displayInformation(): string {
    return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Address: ${this.address}, Rank: ${this.rank}, Age: ${this.age}`;
  }
  calculateCompensation(): number {
    return this.calculateSalary() + this.bonus;
  }
  saveEmployee(): void {
    this.validateAge();
    this.validateRank();
    this.validateSSN();
  }

  private calculateSalary(): number {
    if (this.overtimeHours < 10 && this.overtimeHours > 1) {
      return this.salary * 1.25;
    } else if (this.overtimeHours < 20 && this.overtimeHours > 10) {
      return this.salary * 1.5;
    } else if (this.overtimeHours < 30 && this.overtimeHours > 20) {
      return this.salary * 1.75;
    } else if (this.overtimeHours > 30) {
      return this.salary * 2;
    } else {
      return this.salary;
    }
  }
}
