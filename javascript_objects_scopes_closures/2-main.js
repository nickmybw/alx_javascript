const r1 = new Rectangle(2, 3);
console.log(r1); // Rectangle { width: 2, height: 3 }
console.log(r1.width); // 2
console.log(r1.height); // 3

const r2 = new Rectangle(2, -3);
console.log(r2); // {}
console.log(r2.width); // undefined
console.log(r2.height); // undefined

const r3 = new Rectangle(2);
console.log(r3); // {}
console.log(r3.width); // undefined
console.log(r3.height); // undefined

const r4 = new Rectangle(2, 0);
console.log(r4); // {}
console.log(r4.width); // undefined
console.log(r4.height); // undefined
