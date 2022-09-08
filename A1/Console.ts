import { ContractEmployee } from "./ContractEmployee";
import { FullTimeEmployee } from "./FullTimeEmployee";

let Fulltime = new FullTimeEmployee(
  "123-456-789",
  "Ramos",
  "Paul",
  "141 Cameron Street",
  2,
  31
);
let Contract = new ContractEmployee(
  "123-111-789",
  "Ramos",
  "Elisha",
  "141 Cameron Street",
  4,
  16
);
let errorEmployee = new FullTimeEmployee(
  "123-0-789",
  "Ramos",
  "Abigail",
  "141 Cameron Street",
  12,
  1
);

console.log("Valid Employees");
Fulltime.saveEmployee();
Contract.saveEmployee();

console.log(Fulltime.displayInformation());
console.log(Contract.displayInformation());

console.log("Invalid Employees");
errorEmployee.saveEmployee();

console.log(errorEmployee.displayInformation());
