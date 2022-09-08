import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccounts";

export class SavingsAccount extends BankAccount implements IBankAccount {
  private numberOfDeposits: number = 0;
  private readonly Interest: number = 0.05;

  /**
   * Withdraw money from account, cannot be overdrawn
   * @param amount the amount to be withdrawn
   */
  withdrawalAmount(amount: number): void {
    if (amount > this.accountBalance) {
      throw new Error("Insufficient funds");
    } else {
      this.accountBalance -= amount;
    }
  }
  depositAmount(amount: number): void {
    this.numberOfDeposits++;
    if (this.numberOfDeposits % 5 == 0 && this.numberOfDeposits > 0) {
      let temp = this.accountBalance + amount;
      this.accountBalance = temp + temp * this.Interest;
      console.log("interest");
    } else {
      this.accountBalance += amount;
    }
  }
  getBalance(): number {
    return this.accountBalance;
  }
  printBalance(): string {
    return `Your Savings Account balance is $${this.accountBalance.toFixed(2)}`;
  }
}
