let reverseFunction = (num) => {
  let result = '';
  let stringToNum = num.toString();
  for(let i = stringToNum.length - 1; i >= 0; i--) {
    result += stringToNum[i];
  }
  return parseInt(result);
};