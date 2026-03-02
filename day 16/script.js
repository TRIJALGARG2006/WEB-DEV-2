// let pro = new Promise((resolve, reject) => {
//     let a = 5 ;
//     if (a > 5) {
//         resolve("Promise resolved successfully");
//     } else {
//         reject("Promise rejected");
//     }
// });
// //.then when this promise is resolved and .catch when this promise is rejected
// pro.then(message => {
//     console.log("Inside promise resolved: " + message);
// }       ).catch(error => {
//     console.log("Inside promise rejected: " + error);
// });

// function pro(num){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       console.log(num);
//       res();
//     },1000)
//   })
// }

// pro(1)
// .then(()=>pro(2))
// .then(()=>pro(3))
// .then(()=>pro(4))
// .then(()=>pro(5))
// .catch(()=>console.log("error"))


// promise chaining is a technique where we can chain multiple promises together, allowing us to execute asynchronous operations in
//  a sequential manner. 
// Each promise in the chain waits for the previous one to resolve before executing. 
// This helps to avoid callback hell and makes the code more readable and maintainable.

function pro(num){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log(num);
      res();
    },1000)
  })
}

let prores = Promise.resolve();

for(let i = 1; i <= 5; i++){
  prores = prores.then(() => pro(i))
}



