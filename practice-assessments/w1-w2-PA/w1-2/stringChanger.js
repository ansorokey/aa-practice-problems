// Build a function called stringChanger() that takes in two arguments: a word and an operation. Based on the operation, your function will return the word modified in some way. The operations are:


// "capitalize": Capitalize the first letter in the word.
// "uppercase": Capitalize every letter in the word.
// "double": Return the word twice in a row.
// "reverse": Return the string with the letters in reverse order.

// If the operation is invalid, return the word, unchanged.

/*
 * space to pseudocode
 */

function stringChanger(word, operation) {

}
// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;
if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");
