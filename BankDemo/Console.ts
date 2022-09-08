import { ChequingsAccount } from "./ChequingsAccount";
import { SavingsAccount } from "./SavingsAccount";

let SavingAccount = new SavingsAccount(1000);
let ChequingAccount = new ChequingsAccount(100);

console.log(SavingAccount.printBalance());

try {
  SavingAccount.withdrawalAmount(100);
} catch (error) {
  console.log(error.message);
}

console.log(SavingAccount.printBalance());

SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20); //5th deposit

console.log(SavingAccount.printBalance());

ChequingAccount.withdrawalAmount(1);
ChequingAccount.withdrawalAmount(1);
ChequingAccount.withdrawalAmount(1);
ChequingAccount.withdrawalAmount(1);
ChequingAccount.withdrawalAmount(1);

console.log(ChequingAccount.printBalance());
