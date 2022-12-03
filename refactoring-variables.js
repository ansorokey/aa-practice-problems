// The "Your Code" tab shows a solution for the Anagrams problem.
// Anagrams are words that contain the same characters but not necessarily in the same order.
// The function returns true if word1 and word2 are anagrams.
// This solution only uses the var to declare all variables.
// The code runs as expected, but could be improved.
// Refactor this solution to only use let and const instead of var.

// Which variables should be declared with `let`? Why?

// Which variables should be declared with `const`? Why?

// What are the potential consequences of declaring all variables with `var`,
// even if the function gives you the correct output?

// BONUS: If you have time after refactoring the variables,
// feel free to refactor the logic to further improve this solution
var anagrams = (word1, word2) => {
    var result = true

    if (word1.length !== word2.length) {
        result = false;
        return result;
    }

    var count = {};

    for (var i = 0; i < word1.length; i++) {
        if (count[word1[i]]) {
            count[word1[i]]++;
        } else {
            count[word1[i]] = 1;
        }
    }

    for (var i = 0; i < word2.length; i++) {
        if (count[word2[i]]) {
            count[word2[i]]--;
        } else {
            count[word2[i]] = 1;
        }
    }

    for (var char in count) {
        if (count[char] !== 0) {
            result = false;
            return result;
        }
    }
    return result;
}

var wordA = "restful"
var wordB = "fluster"

var wordC = "cat"
var wordD = "dog"

console.log(anagrams(wordA, wordB));          // true
console.log(anagrams(wordC, wordD));          // false
console.log(anagrams("cat", "act"));          // true
console.log(anagrams("boot", "bootcamp"));    // false
