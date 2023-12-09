let palindromeFunction = string => {
  let lowerCaseString = string.toLowerCase();
  let result = "";
  for(let i = lowerCaseString.length - 1; i >= 0; i--) {
    result += lowerCaseString[i];
  }
  if(result == lowerCaseString) {
    return "this is a palindrome";
  } else {
    return "this is not a palindrome";
  }
};

console.log(palindromeFunction("kayak"));