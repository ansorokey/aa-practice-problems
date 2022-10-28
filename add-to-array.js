// Add To Array - Research
// Write a function that takes a location, either "FRONT" or "BACK" and adds an element to either the front or back of the given array.
// If location is anything besides "FRONT" or "BACK", print an error. Your function should not return anything and should mutate the original array.
// (Hint: Look up the JavaScript functions: push/pop/shift/unshift)

function addToArray(location, element, arr) {
    // Your code here

}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]
