console.log('hello'[2]); // prints

// which data type is mutable
// *

let x = 1;
x++;
x + 2;
console.log(x); // prints

console.log(24 % 6); // prints

console.log((false || true) && !true); // prints

console.log(1 == "1.0"); // prints

console.log(1 + 2 * 3); // prints

let name = 'Brian';
// what type is the name variable above?
// *

//demorgans law
console.log(!(true || false) === (!true && !false));


// explain slice
// *

let num = 100;
let isBig = num >= 100;
let isSmall = num < 100;
console.log(isBig || isSmall); // prints
