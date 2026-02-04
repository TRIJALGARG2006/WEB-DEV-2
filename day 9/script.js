const newparagraph = document.createElement("p");
newparagraph.textContent = "This is a new paragraph added by JavaScript.";
console.log(newparagraph);

const container = document.getElementById("container");
container.appendChild(newparagraph);

const rev = document.querySelector("#container p");
rev.remove();


const image = document.createElement("img");
image.setAttribute("src", "https://s3service.hitbullseye.com/s3fs-public/kr_mangal_sign.jpg?null");
image.setAttribute("width", "300px");
image.setAttribute("height", "200px");

image.setAttribute("alt", "college image");
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

//date method 


let date = new Date();
console.log(date)

setinterval(() => {
    let date = new Date();
    console.log(date)


let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let clock = document.getElementById("digi-clock");

clock.textContent = `${hour} : ${minutes} : ${seconds}`;

}, 1000);