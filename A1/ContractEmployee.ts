import { Employee } from "./Employee";
import { IEmployee } from "./IEmployee";

export class ContractEmployee extends Employee implements IEmployee {
  public hours: number;
  public hourlyRate: number;

  displayInformation(): string {
    return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Address: ${this.address}, Rank: ${this.rank}, Age: ${this.age}`;
  }
  calculateCompensation(): number {
    if (this.hours > 40) {
      return this.hourlyRate * 1.5 + this.hourlyRate;
    } else {
      return this.hourlyRate * this.hours;
    }
  }
  saveEmployee(): void {
    this.validateAge();
    this.validateRank();
    this.validateSSN();
  }
}
