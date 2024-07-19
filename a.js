"use strict";
const x = 1;
console.log(x);
const y = "Vamsi";
console.log(x + y);
//arrow functions
const a = (fname, lname, age) => {
    console.log("Hello " + fname + lname + age);
};
a("vamsi", "tarun", 20);
//functions
//assign a return type
function calcSum(a, b) {
    return a + b;
}
const res = calcSum(2, 4);
console.log(res);
//create function isLegal return true/false based on age
function isLegal(age) {
    if (age > 18) {
        return "Legal to vote";
    }
    else {
        return "Not legal to vote";
    }
}
const legal = isLegal(50);
console.log(legal);
