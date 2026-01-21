let numbers = [1,2,3,4,5,6]

let sliced = numbers.slice(1,5)

console.log(sliced)


//some function 

let numbers2 = [1,3,4,7,9]

let haseven = numbers.some(x=> x % 2 == 0)
console.log(haseven)

//concat 

let fruits1 = ["banana","apple"]
let fruits2 = ["cherry","orange"]
let combined = fruits1.concat(fruits2)
console.log(combined)


//spread operator

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let combined2 = [...arr1,...arr2]
console.log(combined2)


//tenary operator
//condition ? value if true : value if false
let age =20 ;
let canvote = age>=18 ? "yes can vote" : "no cannot vote";
console.log(canvote);


//find out the number is even or odd using tenary operator
let number = 67;
let evenodd = number % 2 == 0 ? "even" : "odd";
console.log(evenodd);

//check if a year an leap year or not using tenary operator
let year = 2000;
let leapyear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? "leap year" : "not a leap year";
console.log(leapyear);


//first class function
//in this function we can pass function to a variable and we are treating the variable as a function
//we can pass a function inside an another function as an argument
//it can return a function from a function  


const demo = function(){
    return "hello from demo function";
}

console.log(demo());

function sample(callback){
    console.log("sample");
    console.log(callback());
}


function sample(){
    return function(){
        console.log("hello from anonymous function");
    }
}













//anonymous function






// settimeout(function(){
//     console.log("hello after 2 seconds");
// },2000);

setInterval(function(){
    console.log("hello every 3 seconds");
},3000);


//self invoking function 

(function(){
    console.log("hello from self invoking function");
})(); 
//advantage of IIFE 
//1. avoid data privacy 
//2. dont give acess to call anywhere 