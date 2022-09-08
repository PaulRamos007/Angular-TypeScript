import { Component, OnInit } from '@angular/core';
import { ChequingAccount } from '../Chequing/chequing-account';
import { SavingsAccount } from '../Savings/savings-account';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css'],
})
export class AtmComponent implements OnInit {
  public isChequing: true;
  public isSavings: boolean;
  public display: string;
  public chequingAccount: ChequingAccount = new ChequingAccount(0);
  public savingsAccount: SavingsAccount = new SavingsAccount(0);
  public amount: number;

  constructor() {}

  ngOnInit(): void {}

  public withdrawalAmount(amount: number) {
    this.display = '';
    try {
      this.display = '';
      if (Number(amount)) {
        if (this.isSavings) {
          this.savingsAccount.withdrawalAmount(Number(amount));
        } else {
          this.chequingAccount.withdrawalAmount(Number(amount));
        }
      }
    } catch (error) {
      this.display = error;
    }
  }
  public depositAmount(amount: number) {
    this.display = '';
    try {
      if (Number(amount)) {
        if (this.isSavings) {
          this.savingsAccount.depositAmount(Number(amount));
        } else {
          this.chequingAccount.depositAmount(Number(amount));
        }
      }
    } catch (error) {
      this.display = error;
    }
  }
}
