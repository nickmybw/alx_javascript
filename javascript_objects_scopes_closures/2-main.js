const Rectangle = require("./2-rectangle");

const r1 = new Rectangle(3, 3);
r1.print(); // Instance width: 3 - height: 3

const r2 = new Rectangle(3, -3);
console.log(r2); // Instance width: undefined - height: undefined

const r3 = new Rectangle(3);
r3.print(); // Instance width: 3

const r4 = new Rectangle(0, 3);
console.log(r4); // Instance width: undefined - height: undefined

const r5 = new Rectangle();
console.log(r5); // Instance no argument
