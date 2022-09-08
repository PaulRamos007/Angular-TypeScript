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
exports.ContractEmployee = void 0;
var Employee_1 = require("./Employee");
var ContractEmployee = /** @class */ (function (_super) {
    __extends(ContractEmployee, _super);
    function ContractEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContractEmployee.prototype.displayInformation = function () {
        return "First Name: ".concat(this.firstName, ", Last Name: ").concat(this.lastName, ", Address: ").concat(this.address, ", Rank: ").concat(this.rank, ", Age: ").concat(this.age);
    };
    ContractEmployee.prototype.calculateCompensation = function () {
        if (this.hours > 40) {
            return this.hourlyRate * 1.5 + this.hourlyRate;
        }
        else {
            return this.hourlyRate * this.hours;
        }
    };
    ContractEmployee.prototype.saveEmployee = function () {
        this.validateAge();
        this.validateRank();
        this.validateSSN();
    };
    return ContractEmployee;
}(Employee_1.Employee));
exports.ContractEmployee = ContractEmployee;
