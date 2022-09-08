"use strict";
exports.__esModule = true;
var ChequingsAccount_1 = require("./ChequingsAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var SavingAccount = new SavingsAccount_1.SavingsAccount(1000);
var ChequingAccount = new ChequingsAccount_1.ChequingsAccount(100);
console.log(SavingAccount.printBalance());
try {
    SavingAccount.withdrawalAmount(100);
}
catch (error) {
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
