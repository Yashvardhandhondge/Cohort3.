function greet(name:string):string{
    return 'Hello'+name
}

console.log(greet("yash"))

function iseven(x:number):boolean{
    if(x %2){
        return true
    }else{
        return false
    }
}
console.log(iseven(3))

interface Address{
    city:string,
        country:string,
        pincode:number 
}

interface User{
    name:string;
    age:number;
    address?:Address //adding question mark infornt makes it optional 
}

interface People{
    name:string,
    age:number
    greet:() =>string
}

let people:People={
    name:"Ysh",
    age:20,
    greet:()=>{
        return "hi"
    }
}

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


function isLegal(user:User):boolean{
    if (user.age >18){
        return true
    }else {
        return false
    }
}
// console.log(isLegal(user))



interface People1{
    name:string,
    age:number;
    isLegal():boolean
    // greet:()=>string;
}

// let person :People1 ={
//     name:"Ysh",
//     age:20,
//     // greet:()=>{
//     //     return "hi"
//     // }
// }

class Manager implements People1{
    
    constructor(public name:string,public age:number){
        this.name = name
        this.age = age
    }
    isLegal() {
        return this.age>18
    }
    
}

let user1 = new Manager("john",30);
console.log(user1.age,user1.name);


class Shape{
    area(){
        console.log("Hi i am area");
    }
}
class Recyangle extends Shape{
    width:number;
    height:number;
    constructor(){
        super()
        this.width = 1;
        this.height = 2;
    }
}

class God extends Manager{
    constructor(name:string,age:number){
        super(name,age)
    }
}


// abstract class user3{
//     name:string;

// }

type User3 ={
    name :string,
    age:number
}

function isLegal4(user:User3){
    return user.age >18
}

type Employee ={
    name:string;
    startDate:string;
}
type Manager2 ={
    name:string;
    department:string;
}

type TeamLead = Employee & Manager2;

let a:Employee={
    name:"Harkirat",
    startDate:"01-02-2024"
}

let m:Manager2 ={
    name:"harkirat",
    department:"02-03-566"
}

let t:TeamLead ={
    name:"Harkirat",
    startDate:"dgeug-930",
    department:"bjnd"
}

type goodUser={
    name:string;
    gift:string;
}
type baduser = {
    name:string,
    ip:string,
}

type user5 =  goodUser | baduser;

const user6:user5 ={
    name:"yash",
    gift:"sdvjdj"
}

//union can have either ibe ir all values

interface Admin{
    name:string;
    permissions:string;
}
interface User{
    name:string;
    age:number;
}

type UserOrAmin = User | Admin;
function greet3(user:UserOrAmin){
    console.log(user.name)
}


function getMax(nums:number[]){
    let maxValue = -100000;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>maxValue){
                maxValue=nums[i];
        }
    }
    return maxValue;
}
console.log(getMax([1,2,3]))

interface User{
    firstname:string;
    lastname:string;
    age:number
}
function filterUsrts(user:User3[]){
    let ans =[]
    for(let i=0;i<user.length;i++){
        if(user[i].age>18){
            ans.push(user[i])
        }
    }
    return ans
}


function filterUser(use)
// const filterUser = filterUser()