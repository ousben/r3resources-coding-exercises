function allCombinations(string) {
  let result = []
  for(let i = 0; i < string.length; i++) {
    for(let j = i; j < string.length; j++) {
      result.push(string.slice(i, j+1));
    }
  }
  return result;
}