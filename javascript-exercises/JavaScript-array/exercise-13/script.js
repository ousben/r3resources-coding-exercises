const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const displayButton = document.getElementById("display-button");
const newDiv = document.getElementById("items");

const newUl = document.createElement("ul");
newDiv.append(newUl);

counter = 0

addButton.addEventListener("click", function() {
  let newLi = document.createElement("li");
  newLi.id = "list-item";
  newLi.style.listStyle = "none";
  newLi.textContent = `Element ${counter} = ${inputField.value}`;
  newUl.append(newLi);
  counter++
});

displayButton.addEventListener("click", function() {
  if(newDiv.style.visibility != "hidden") {
    newDiv.style.visibility = "hidden";
  } else {
    newDiv.style.visibility = "visible";
  }
});