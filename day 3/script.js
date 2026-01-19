let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Strawberry");
console.log(fruits);



//reverse the array by using push pop method 

let reversedFruits = [];
while (fruits.length > 0) {
    let fruit = fruits.pop();
    reversedFruits.push(fruit);
}

console.log(reversedFruits);



//remove all negative number from an array 

let numbers = [10, -5, 3, -1, 0, 7, -2];
let positiveNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        positiveNumbers.push(numbers[i]);
    }
}

console.log(positiveNumbers);