// Complete the function named sundaeOrder().
// This function will return another function
// that should accept a string (topping) to add to the sundae.
// A sundae will start off with a default
// "A bowl of ice cream with hot fudge".
// Each incoming topping should be separated by "and".
// The function skeleton has already been created for you
//* - your job is to fill in the missing logic.



//* Look at the example test cases to see how this function is invoked:
function sundaeOrder() {
    // your code here

  return function (topping) {
      // your code here

  };
}

let sundae = sundaeOrder(); // => returns a function
console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"
