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