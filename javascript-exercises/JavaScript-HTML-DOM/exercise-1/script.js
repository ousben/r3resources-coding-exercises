let textChange = document.getElementById("text");
let btn = document.getElementById("jsstyle");

btn.addEventListener("click", function() {
  textChange.style.fontFamily = "sans-serif";
  textChange.style.fontSize = "30px";
  textChange.style.color = "green";
});