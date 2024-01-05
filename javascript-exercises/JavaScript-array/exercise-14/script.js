function removeDuplicate(arr) {
  let array = arr.map(item => {
    return item.toLowerCase();
  });
  let toDelete = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j <  array.length; j++) {
      if(array[i] === array[j]) {
        toDelete.push(j);
      }
    }
  }
  for(let i = 0; i < toDelete.length; i++) {
    array.splice(toDelete[i] - i, 1);
  }
  return array;
}