const task2 = document.getElementsByClassName("important");
for (let i = 0; i < task2.length; i++) {
    task2[i].style.color = "red";
    task2[i].style.fontSize = "20px";
}
console.log(task2.length);