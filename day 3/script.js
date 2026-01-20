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

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0) {
//         positiveNumbers.push(numbers[i]);
//     }
// }


while (numbers.length > 0) {
    let num = numbers.pop();
    if (num >= 0) {
        positiveNumbers.push(num);
    }
}

console.log(positiveNumbers);


//check if an array is a palindrome 

function palindrome () {
    let arr = [1, 2, 3, 2, 1];
    let original = [];
    let reverse = [];

    for (let i = 0; i < arr.length; i++) {
        original.push(arr[i]);
    }

    while (arr.length > 0) {
        let element = arr.pop();
        reverse.push(element);
    }


    for (let i = 0; i < original.length; i++) {
        if (original[i] !== reverse[i]) {
            return "not a palindrome";
        }
    }

    return "is a palindrome";

}

// console.log(isPalindrome);



//remove duplicates from an array
//move all zeros to the end of an array
//undo/redo simulation
//array chunking
//find the second largest number in an array
//rotate an array by k positions
//find the intersection of two arrays
//merge two sorted arrays