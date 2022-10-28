// Remove From Array - Research
// Write a function that takes a location, either "FRONT" or "BACK" and removes the element at either the front or back of the given array.
// If location is anything besides "FRONT" or "BACK", print an error. Your function should not return anything and should mutate the original array.
// (Hint: Look up the JavaScript functions: push/pop/shift/unshift)


function removeFromArray(location, arr) {
    // Your code here

}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]
