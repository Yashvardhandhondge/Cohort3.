"use strict";
function greet(name) {
    return 'Hello' + name;
}
console.log(greet("yash"));
function iseven(x) {
    if (x % 2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(iseven(3));
let people = {
    name: "Ysh",
    age: 20,
    greet: () => {
        return "hi";
    }
};
// let greeting = people.greet()
// console.log(greeting);
// let userq:User ={
//     name:"Yash",
//     age:20,
//     address:{
//         city:"Latur",
//         country:"India",
//         pincode:413512
//     }
// }
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// let person :People1 ={
//     name:"Ysh",
//     age:20,
//     // greet:()=>{
//     //     return "hi"
//     // }
// }
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18;
    }
}
let user1 = new Manager("john", 30);
console.log(user1.age, user1.name);
class Shape {
    area() {
        console.log("Hi i am area");
    }
}
class Recyangle extends Shape {
    constructor() {
        super();
        this.width = 1;
        this.height = 2;
    }
}
class God extends Manager {
    constructor(name, age) {
        super(name, age);
    }
}
function isLegal4(user) {
    return user.age > 18;
}
let a = {
    name: "Harkirat",
    startDate: "01-02-2024"
};
let m = {
    name: "harkirat",
    department: "02-03-566"
};
let t = {
    name: "Harkirat",
    startDate: "dgeug-930",
    department: "bjnd"
};
const user6 = {
    name: "yash",
    gift: "sdvjdj"
};
function greet3(user) {
    console.log(user.name);
}
function getMax(nums) {
    let maxValue = -100000;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}
console.log(getMax([1, 2, 3]));
function filterUsrts(user) {
    let ans = [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].age > 18) {
            ans.push(user[i]);
        }
    }
    return ans;
}
// const filterUser = filterUser()
