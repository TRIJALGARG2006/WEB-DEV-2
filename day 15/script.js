console.log("first line of code");
// setTimeout(() => {
//     console.log("This message appears after 1 second");
// }, 1000);

const p = new Promise((resolve, reject) => {
    resolve("Promise resolved successfully");
    // reject("Promise rejected");
});

p.then(message => {
    console.log("inside promise: " + message);
});

console.log("Last line of code");  

const p2 = new Promise((resolve, reject) => {
    resolve("Promise 2 resolved successfully");
});

p2.then(message => {
    console.log("Inside promise 2 resolved: " + message );
});

