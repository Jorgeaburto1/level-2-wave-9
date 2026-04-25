// 08 – FUNCTIONS (Homework)
// ----------------------------------------------

// Homework focus:
// - practice writing small functions
// - practice parameters + return
// - practice arrow functions
// - practice callbacks (just a little)
//
// ==============================================
// TASK 1 – “MAKE A MACHINE” (RETURN A VALUE)
// ==============================================
//
// STEP 1: Create a function named doubleNumber.
//         It takes ONE parameter: n
//         It returns n * 2
//

function doubleNumber(n) {
    return n * 2;
};

console.log(`Function: n(2) * 2 = ${doubleNumber(2)}`);
console.log(`Function: n(16) * 2 = ${doubleNumber(16)}`);
console.log(`Function: n(8) * 2 = ${doubleNumber(8)}`);


// STEP 2: Test it 3 times with console.log.
//         Use labels so it’s clear.
//
// ==============================================
// TASK 2 – “GUARDRAIL” (IF / ELSE INSIDE A FUNCTION)
// ==============================================
//
// STEP 3: Create a function named canWatchMovie.
//         It takes ONE parameter: age
//

function canWatchMovie(age) {
    if (age >= 13){
    return (`Age is ${age}, ALLOWED`)
} else {
    return (`Age is ${age}, NOT ALLOWED`)
}
};

console.log(canWatchMovie(10));
console.log(canWatchMovie(13));
console.log(canWatchMovie(17));



// STEP 4: Inside the function:
//         - If age is 13 or higher, return "Allowed ✅"
//         - Else, return "Not allowed ❌"
//
// STEP 5: Test it with ages like 10, 13, 17.
//
// ==============================================
// TASK 3 – DEFAULT PARAMETER (OPTIONAL INPUT)
// ==============================================
//
//  Sometimes you want a “backup value” if the user didn’t pass anything.
//
// STEP 6: Create a function named greet.
//         It takes ONE parameter: name
//         If no name is provided, it should default to "friend"
//

function greet(name){
    if (name === undefined){
        return name = "Hello, Friend!"
    } else {
        return `Hello, ${name}!`
    }

};

console.log(greet("jorge"));
console.log(greet());

// STEP 7: Return a string like: "Hello, <name>!"
//
// STEP 8: Test greet() with:
//         - greet("Maya")
//         - greet()   (no argument)
//
// ==============================================
// TASK 4 – ARROW FUNCTION PRACTICE
// ==============================================
//
// STEP 9: Create an arrow function named subtract.
//         It takes two parameters: a and b
//         It returns a - b
//

const subtract = (a, b) => {
    return `${a} - ${b} = ${a - b}`;
};

console.log(subtract(13, 3));

console.log(subtract(20,15));

console.log(subtract(131,234));

// STEP 10: console.log subtract with a few tests.
//
// ==============================================
// TASK 5 – CALLBACK MINI (FUNCTION AS AN ARGUMENT)
// ==============================================
//
// STEP 11: Create a function named doMath.
//          It takes THREE parameters:
//          - numberA
//          - numberB
//          - operation (this will be a FUNCTION)
//

const doMath = (numberA, numberB, operation) => {
    return operation(numberA, numberB);
}

const add = (a,b) => a + b;

const sub = (a,b) => a - b;

console.log(doMath(37,17,add));

console.log(doMath(40,20,sub));


// STEP 12: Inside doMath:
//          return operation(numberA, numberB)
//
// STEP 13: Call doMath twice:
//          - once with an add operation
//          - once with a multiply operation
//
//  Hint: You can pass arrow functions like:
// (x, y) => x + y
//
// ==============================================
// TASK 6 – “REAL LIFE” MINI: TAX CALCULATOR
// ==============================================
//
// STEP 14: Create a function named addTax.
//          It takes two parameters:
//          - price
//          - taxRatePercent  (example: 16 for 16%)
//


// FUNCTION 

// function addTax(price,taxRatePercent){
//     return price + (price * (taxRatePercent / 100));
// };

// console.log(addTax(259,16));

// ARROW FUNCTION 

const addTax = (price, taxRatePercent) => price + (price * (taxRatePercent / 100));

console.log(addTax(560,16));

// STEP 15: Convert the taxRatePercent into a decimal rate.
//          Example: 16% becomes 0.16
//
// STEP 16: Return the final price WITH tax included.
//
// STEP 17: Test with console.log:
//          addTax(100, 16)
//          addTax(59.99, 8)
//
