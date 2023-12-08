let btn = document.getElementById("the-button");
let href = document.getElementById("w3r").href;
let hreflang = document.getElementById("w3r").hreflang;
let target = document.getElementById("w3r").target;
let type = document.getElementById("w3r").type;

btn.addEventListener('click', () => {
  console.log(href + " " + hreflang + " " + target + " " + type);
});