export class Foo {
  //public name;
  constructor(public name: string) {
    this.name = name;
  }

  fire() {
    console.log("BANG!");
  }

  fireWeapon(weapon: Foo.Weapons) {
    console.log(`Fire the ${weapon}`);
  }

  fireWeaponToString(weapon: Foo.Weapons): string {
    return Foo.Weapons[weapon];
  }
}

export namespace Foo {
  export enum Weapons {
    Canon,
    torpedos,
    MachinceGun,
    DeathRay,
    NailGun,
  }
}
let myFirstFoo = new Foo("Paul");

console.log(`I am a foo and my name is ${myFirstFoo.name}`);

myFirstFoo.fire();

myFirstFoo.fireWeapon(Foo.Weapons.Canon);

let theWeapon: string;
theWeapon = myFirstFoo.fireWeaponToString(Foo.Weapons.Canon);
console.log(`The weapon fired from ToString is ${theWeapon}`);
