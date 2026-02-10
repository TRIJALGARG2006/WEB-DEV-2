document.getElementById('myinput')
textinput.addEventListener("change", (event) => {
    //
    event.preventDefault();
    console.log(event.target.value);
})

const form = document.getElementById('myform');
const textinput = document.getElementById('myinput');
const submitbutton = document.getElementById('submitbutton');
const output = document.getElementById('output');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name= textinput.value;
    const course = courseinput.value;
    console.log(name);


    output.innerText = name + " " + course;

})