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
exports.FullTimeEmployee = void 0;
var Employee_1 = require("./Employee");
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullTimeEmployee.prototype.displayInformation = function () {
        return "First Name: ".concat(this.firstName, ", Last Name: ").concat(this.lastName, ", Address: ").concat(this.address, ", Rank: ").concat(this.rank, ", Age: ").concat(this.age);
    };
    FullTimeEmployee.prototype.calculateCompensation = function () {
        return this.calculateSalary() + this.bonus;
    };
    FullTimeEmployee.prototype.saveEmployee = function () {
        this.validateAge();
        this.validateRank();
        this.validateSSN();
    };
    FullTimeEmployee.prototype.calculateSalary = function () {
        if (this.overtimeHours < 10 && this.overtimeHours > 1) {
            return this.salary * 1.25;
        }
        else if (this.overtimeHours < 20 && this.overtimeHours > 10) {
            return this.salary * 1.5;
        }
        else if (this.overtimeHours < 30 && this.overtimeHours > 20) {
            return this.salary * 1.75;
        }
        else if (this.overtimeHours > 30) {
            return this.salary * 2;
        }
        else {
            return this.salary;
        }
    };
    return FullTimeEmployee;
}(Employee_1.Employee));
exports.FullTimeEmployee = FullTimeEmployee;
