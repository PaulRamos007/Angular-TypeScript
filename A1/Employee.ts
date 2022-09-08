export abstract class Employee {
  public ssn: string;
  public lastName: string;
  public firstName: string;
  public address: string;
  public rank: number;
  public age: number;

  constructor(
    ssn: string,
    lastName: string,
    firstName: string,
    address: string,
    rank: number,
    age: number
  ) {
    this.ssn = ssn;
    this.lastName = lastName;
    this.firstName = firstName;
    this.address = address;
    this.rank = rank;
    this.age = age;
  }

  protected validateAge(): boolean {
    if (this.age >= 16) {
      return true;
    } else {
      console.log(`Age is out of range ${this.age}`);
      return false;
    }
  }

  protected validateRank(): boolean {
    if (this.rank <= 5 && this.rank >= 1) {
      return true;
    } else {
      console.log(`Rank is out of range ${this.rank}`);
      return false;
    }
  }

  protected validateSSN(): boolean {
    let regExp: RegExp =
      /^([1-9])(?!\1{2}-\1{2}-\1{4})[1-9]{2}-[1-9]{3}-[1-9]{3}/;
    if (regExp.test(this.ssn)) {
      return true;
    } else {
      console.log(`SSN validation failed ${this.ssn}`);
      return false;
    }
  }
}
