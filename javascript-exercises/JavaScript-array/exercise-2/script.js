function cloneArray(array) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

console.log(cloneArray([1, 2, [4, 0]]));