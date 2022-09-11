alert("Heyy")
let a = prompt("GM, what's your age?");
a = Number.parseInt(a); // Converting the string to a number
console.log(a);
console.log(typeof a); // for knowing the type of a

// in JAVASCRIPT we have 3 forms of if...else statement

// if statement

if (a > 2) {
    alert("This is a valid age");
}

// if....else statement

if (a > 2) {
    alert("This is a valid age");
}
else {
    alert("This is an invalid age");
}

// if...else if...else statement

if (a < 0) {
    alert("This is an invalid age")
}
else if (a < 9) {
    alert("You are a kid and you cannot even think of driving");
}
else if (a < 18 && a >= 9) {
    alert("You are a kid and you can think of driving after 18");
}
else {
    alert("You can now drive as you are above 18");
}
console.log("Done");


// Ternary operator

console.log("Your can", (a > 18 ? "Drive" : "not drive"));


// Task - Explore switch statement and write a basic program in the comments