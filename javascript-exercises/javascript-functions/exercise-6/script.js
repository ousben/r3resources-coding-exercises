function longuestWord(string) {
  let result = "";
  let words = string.split(' ');
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > result.length) {
      result = words[i];
    }
  }
  return result;
}