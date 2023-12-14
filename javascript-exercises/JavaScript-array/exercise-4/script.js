function lastElements(array, target) {
  let result = [];
  if(target < 0) {
    return result;
  }
  if(target > array.length) {
    return array;
  }
  for(let i = array.length - 1; i >= 0; i--) {
    result.unshift(array[i]);
  }
  return result;
}