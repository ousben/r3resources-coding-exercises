let btn = document.getElementById("button");
let table = document.getElementById("sampleTable");

btn.addEventListener("click", function() {
  let newRow = document.createElement("tr");
  let newCell1 = document.createElement("td");
  let newCell2 = document.createElement("td");
  newCell1.innerHTML = "NewCell cell1";
  newCell2.innerHTML = "NewCell cell2";
  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);
  table.appendChild(newRow);
});