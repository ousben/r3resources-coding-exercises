function largestItem(array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] > result) {
      result = array[i];
      console.log(array[i]);
    } else {
      console.log("Result not updated");
    }
  }
  return result;
}