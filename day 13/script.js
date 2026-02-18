let mypromise = new Promise((res,rej) => {
    let data = "this is data";
    if (data) {
        res(data);
    } else {
        rej("error");
    }


});

console.log(mypromise);
mypromise.then((data) => {
    console.log("data received: ", data);
}).catch((err) => {
    console.log("error: ", err);
});


let resp = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((robj) => robj.json())
  .then((rjson) => console.log(rjson));

