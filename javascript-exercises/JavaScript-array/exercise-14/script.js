function removeDuplicate(arr) {
  let array = arr.map(item => {
    return item.toLowerCase();
  })
  return array;
}

console.log(removeDuplicate(["Blue", "Green", "Orange", "Green", "Orange", "Indigo", "Indigo"]));