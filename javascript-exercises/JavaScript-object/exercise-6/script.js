function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i - 1; j++) {
      if(typeof array[j] != "number" || typeof array[j+1] != "number") {
        return "this is not a list of number";
      }
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}

console.log(bubbleSort([1, 7, 18, 156, 2]));