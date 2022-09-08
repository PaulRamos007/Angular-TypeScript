"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ChequingsAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var ChequingsAccount = /** @class */ (function (_super) {
    __extends(ChequingsAccount, _super);
    function ChequingsAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberofWithdrawals = 0;
        _this.Fee = 10;
        return _this;
    }
    /**
     * Winthdraw money from account and cannot be overdrawm
     * @param amount the amount to be wihtdrawn
     */
    ChequingsAccount.prototype.withdrawalAmount = function (amount) {
        if (amount > this.accountBalance) {
            throw new Error("Overdrawn account");
        }
        else {
            this.numberofWithdrawals++;
            if (this.numberofWithdrawals % 5 == 0 && this.numberofWithdrawals > 0) {
                this.accountBalance -= amount + this.Fee;
            }
            else {
                this.accountBalance -= amount;
            }
        }
    };
    ChequingsAccount.prototype.depositAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Cannot deposit negative amount");
        }
        else {
            this.accountBalance += amount;
        }
    };
    ChequingsAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    ChequingsAccount.prototype.printBalance = function () {
        return "Your Chequing Account balance is $".concat(this.accountBalance.toFixed(2));
    };
    return ChequingsAccount;
}(BankAccount_1.BankAccount));
exports.ChequingsAccount = ChequingsAccount;
