function sortAlgorithm(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array;
}

console.log(sortAlgorithm([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]));