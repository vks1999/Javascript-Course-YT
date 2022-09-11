// nn bb ss u - Primitive Data Types in JS
//Null, number, boolean, BigInt, string, symbol, undefined - All are Primitive datatypes
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Vikash"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c, d, e, f, g)
console.log(typeof g)

// Non Primitive Data Type - Objects in JS
const item = {
    "Vikash": true,
    "Sam": false,
    "Lal": 67,
    "Rohan": undefined
}
console.log(item["Vikash"]);