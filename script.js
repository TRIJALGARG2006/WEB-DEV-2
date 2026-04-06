function checkNumber(num){

    return new Promise(function(resolve, reject){

        if(num > 10){
            resolve("Success: Number is greater than 10");
        } 
        else{
            reject("Error: Number must be greater than 10");
        }

    });
}

let number = 12;

checkNumber(number)

.then(function(result){
    console.log(result);
})

.catch(function(error){
    console.log(error);
})

.finally(function(){
    console.log("Operation Completed");
});