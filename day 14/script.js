// fetch()
// .then(resp=>{
//     console.log(resp);
//     if (resp.ok){
//         return resp.json();
//     }    else{
//         throw new Error("Network response was not ok");
//     }
// })



async function getdata(url){
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>console.log(data))
    let resp = await fetch(url);
    let data = await resp.json();
}
getdata("https://jsonplaceholder.typicode.com/posts/1")
.then(data=>console.log(data))

