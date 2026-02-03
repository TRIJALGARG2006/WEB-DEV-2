const paras = document.getElementsByClassName("important");
for (let i in paras) {
  if (i % 2 == 0) {
    paras[i].style.color = "blue";
  } else {
    paras[i].style.color = "green";
  }
  if (i == paras.length - 1) {
    paras[i].style.fontWeight = "700";
  }
}