// function handleclick(){
//     document.getElementById("btn")
//     .textContent = "Clicked";
// }


 function changeHeading() {
    const heading = document.getElementById("heading");
    heading.style.color = "tomato";
    heading.textContent = "New heading";
}


document.getElementById("btn").addEventListener("click",()=>{ 

    let container = document.getElementById("container")
    let span = document.createElement("span");
    span.textContent = "This is a span ";
    let img = document.createElement("img");
    img.src = "https://images.filmibeat.com/webp/img/2025/07/shinchan-1751441040.jpg";
    img.alt = "Shinchan";

    container.appendChild(span);
    container.appendChild(img);
})

