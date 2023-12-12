function objectProperties(object) {
  let result = [];
  for(let i = 0; i < Object.keys(object).length; i++) {
    result.push(Object.keys(object)[i]);
  }
  return result;
}