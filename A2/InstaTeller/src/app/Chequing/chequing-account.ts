import { BankAccount } from '../atm/bank-account';
import { IBankAccount } from '../BankAccount/IBankAccount';
import { Transaction } from '../Transactions/transaction';
import { TransactionType } from '../Transactions/transaction-type';

export class ChequingAccount extends BankAccount implements IBankAccount {
  private numberofWithdrawals: number = 1;
  private readonly TransFee: number = 10;

  constructor(initialBalance: number) {
    super(initialBalance);
  }

  /**
   * Winthdraw money from account and cannot be overdrawm
   * @param amount the amount to be wihtdrawn
   */
  withdrawalAmount(amount: number): void {
    const transaction: Transaction = new Transaction();
    const nextTransaction: Transaction = new Transaction();

    if (amount > this.accountBalance) {
      throw new Error('Insufficient funds');
    } else {
      if (this.numberofWithdrawals % 5 == 0 && this.numberofWithdrawals > 0) {
        if (this.accountBalance >= amount + 10) {
          this.accountBalance -= amount;
          transaction.amount = amount;
          transaction.transType = TransactionType.Withdrawal;
          this.transactions.push(transaction);

          this.accountBalance -= this.TransFee;
          nextTransaction.amount = this.TransFee;
          nextTransaction.transType = TransactionType.Fee;
          this.transactions.push(nextTransaction);
          this.numberofWithdrawals++;
        } else {
          throw new Error('Insufficient Funds');
        }
        this.accountBalance -= amount + this.TransFee;
      } else {
        this.numberofWithdrawals++;
        this.accountBalance -= amount;
        transaction.amount = amount;
        transaction.transType = TransactionType.Withdrawal;
        this.transactions.push(transaction);
      }
    }
  }
  depositAmount(amount: number): void {
    const transaction: Transaction = new Transaction();

    if (amount < 0) {
      throw new Error('Cannot deposit negative amount');
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
    return `Your Chequing Account balance is $${this.accountBalance.toFixed(
      2
    )}`;
  }
}
