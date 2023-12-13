function lengthObject(object) {
  let counter = 0;
  for(let i = 0; i < Object.keys(object).length; i++) {
    counter++;
  }
  return counter;
}