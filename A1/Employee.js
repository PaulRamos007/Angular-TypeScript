"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(ssn, lastName, firstName, address, rank, age) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }
    Employee.prototype.validateAge = function () {
        if (this.age >= 16) {
            return true;
        }
        else {
            console.log("Age is out of range ".concat(this.age));
            return false;
        }
    };
    Employee.prototype.validateRank = function () {
        if (this.rank <= 5 && this.rank >= 1) {
            return true;
        }
        else {
            console.log("Rank is out of range ".concat(this.rank));
            return false;
        }
    };
    Employee.prototype.validateSSN = function () {
        var regExp = /^([1-9])(?!\1{2}-\1{2}-\1{4})[1-9]{2}-[1-9]{3}-[1-9]{3}/;
        if (regExp.test(this.ssn)) {
            return true;
        }
        else {
            console.log("SSN validation failed ".concat(this.ssn));
            return false;
        }
    };
    return Employee;
}());
exports.Employee = Employee;
