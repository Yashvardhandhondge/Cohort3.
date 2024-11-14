"use strict";
let x = 1000;
let y = "Yash";
console.log(y);
console.log(x);
function grettings(name) {
    return `Hello ${name}`;
}
console.log(grettings(y));
function maxAubArraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
const arr = [-2, -3, -4, -1, -2, 1, 5, -3];
console.log(maxAubArraySum(arr));
function isLarge(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLarge(2));
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hello");
});
