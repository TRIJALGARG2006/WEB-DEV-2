function sample(callback){
    console.log("hellooooooo");
    callback()
}
function test(){
    console.log("test")
}
sample(test)