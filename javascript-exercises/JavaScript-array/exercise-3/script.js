function firstElements(array, target) {
  let result = [];
  if(target < 0) {
    return result;
  }
  if(target > array.length) {
    return array;
  }
  for(let i = 0; i < target; i++) {
    result.push(array[i]);
  }
  return result;
}