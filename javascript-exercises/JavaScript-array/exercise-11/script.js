function sumSquares(array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    result += array[i] ** 2;
  }
  return result;
}