// Write a function that accepts an object, obj, and a string, str
// and prints the value from the object at the key str.

const obj = {
    first: "1",
    second: 2,
    third: "three"
}

const str = "first";

const variableAsKey = (obj, str) => {
    // Write your code here.
}

variableAsKey(obj, str);                // "1" (looks like 1 in terminal)
variableAsKey(obj, "second");           // 2
