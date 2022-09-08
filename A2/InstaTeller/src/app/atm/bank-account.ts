import { Transaction } from '../Transactions/transaction';

export abstract class BankAccount {
  protected accountBalance: number;

  constructor(initialBalance: number) {
    this.accountBalance = initialBalance;
  }

  public transactions: Array<Transaction> = new Array<Transaction>();
}
