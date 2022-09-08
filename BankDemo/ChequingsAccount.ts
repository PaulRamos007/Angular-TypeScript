import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccounts";

export class ChequingsAccount extends BankAccount implements IBankAccount {
  private numberofWithdrawals: number = 0;
  private readonly Fee: number = 10;

  /**
   * Winthdraw money from account and cannot be overdrawm
   * @param amount the amount to be wihtdrawn
   */
  withdrawalAmount(amount: number): void {
    if (amount > this.accountBalance) {
      throw new Error("Overdrawn account");
    } else {
      this.numberofWithdrawals++;
      if (this.numberofWithdrawals % 5 == 0 && this.numberofWithdrawals > 0) {
        this.accountBalance -= amount + this.Fee;
      } else {
        this.accountBalance -= amount;
      }
    }
  }
  depositAmount(amount: number): void {
    if (amount < 0) {
      throw new Error("Cannot deposit negative amount");
    } else {
      this.accountBalance += amount;
    }
  }
  getBalance(): number {
    return this.accountBalance;
  }
  printBalance(): string {
    return `Your Chequing Account balance is $${this.accountBalance.toFixed(
      2
    )}`;
  }
}
