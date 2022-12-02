// Given an object that has other objects
// nested inside of it, write a function
// that takes that object and
// returns all values that are at a depth of 2.
const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const printDepthOfTwo = obj => {
    // Write your solution here.
}

printDepthOfTwo(nestedObj);               // cello dello fellow { h: "hello", i: "io" } jello
