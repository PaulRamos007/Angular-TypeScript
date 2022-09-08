import { TransactionType } from './transaction-type';

export class Transaction {
  public transType: TransactionType;
  public amount: number;

  public toString(): string {
    return TransactionType[this.transType] + ' $' + this.amount.toFixed(2);
  }
}
