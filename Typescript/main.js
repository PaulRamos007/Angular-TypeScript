"use strict";
exports.__esModule = true;
exports.Foo = void 0;
var Foo = /** @class */ (function () {
    //public name;
    function Foo(name) {
        this.name = name;
        this.name = name;
    }
    Foo.prototype.fire = function () {
        console.log("BANG!");
    };
    Foo.prototype.fireWeapon = function (weapon) {
        console.log("Fire the ".concat(weapon));
    };
    Foo.prototype.fireWeaponToString = function (weapon) {
        return Foo.Weapons[weapon];
    };
    return Foo;
}());
exports.Foo = Foo;
(function (Foo) {
    var Weapons;
    (function (Weapons) {
        Weapons[Weapons["Canon"] = 0] = "Canon";
        Weapons[Weapons["torpedos"] = 1] = "torpedos";
        Weapons[Weapons["MachinceGun"] = 2] = "MachinceGun";
        Weapons[Weapons["DeathRay"] = 3] = "DeathRay";
        Weapons[Weapons["NailGun"] = 4] = "NailGun";
    })(Weapons = Foo.Weapons || (Foo.Weapons = {}));
})(Foo = exports.Foo || (exports.Foo = {}));
exports.Foo = Foo;
var myFirstFoo = new Foo("Paul");
console.log("I am a foo and my name is ".concat(myFirstFoo.name));
myFirstFoo.fire();
myFirstFoo.fireWeapon(Foo.Weapons.Canon);
var theWeapon;
theWeapon = myFirstFoo.fireWeaponToString(Foo.Weapons.Canon);
console.log("The weapon fired from ToString is ".concat(theWeapon));
