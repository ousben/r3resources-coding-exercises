function alphabeticalOrder(string) {
  let result = [];
  for(let k = 0; k < string.length; k++) {
    result.push(string[k]);
  }
  for(let i = 0; i < result.length; i++) {
    for(let j = 0; j < result.length - i - 1; j++) {
      if(result[j+1] < result[j]) {
        [result[j+1], result[j]] = [result[j], result[j+1]];
      }
    }
  }
  return result;
}