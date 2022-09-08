import { BankAccount } from '../atm/bank-account';
import { IBankAccount } from '../BankAccount/IBankAccount';
import { Transaction } from '../Transactions/transaction';
import { TransactionType } from '../Transactions/transaction-type';

export class SavingsAccount extends BankAccount implements IBankAccount {
  private numberOfDeposits: number = 0;
  private readonly Interest: number = 0.05;

  constructor(initialBalance: number) {
    super(initialBalance);
  }

  /**
   * Withdraw money from account, cannot be overdrawn
   * @param amount the amount to be withdrawn
   */
  withdrawalAmount(amount: number): void {
    const transaction: Transaction = new Transaction();

    if (amount > this.accountBalance) {
      throw new Error('Insufficient funds');
    } else {
      this.accountBalance -= amount;
      transaction.amount = amount;
      transaction.transType = TransactionType.Withdrawal;
      this.transactions.push(transaction);
    }
  }
  depositAmount(amount: number): void {
    this.numberOfDeposits++;
    const transaction: Transaction = new Transaction();

    if (this.numberOfDeposits % 5 == 0 && this.numberOfDeposits > 0) {
      this.accountBalance += amount;

      transaction.amount = this.accountBalance * this.Interest;
      this.accountBalance += transaction.amount;
      transaction.transType = TransactionType.Interest;
      this.transactions.push(transaction);
    } else {
      this.accountBalance += amount;
      transaction.amount = amount;
      transaction.transType = TransactionType.Deposit;
      this.transactions.push(transaction);
    }
  }
  getBalance(): number {
    return this.accountBalance;
  }
  printBalance(): string {
    return `Your Savings Account balance is $${this.accountBalance.toFixed(2)}`;
  }
}
