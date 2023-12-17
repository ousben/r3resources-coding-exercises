function truncateString(string, num) {
  if(string.length < num) {
    return 'This is out of range';
  }
  let result = "";
  for(let i = 0; i < num; i++) {
    result += string[i];
  }
  return result;
}