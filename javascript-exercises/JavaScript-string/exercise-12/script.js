function uncamelize(string, separator) {
  let words = [];
  let word = "";
  for(let i = 0; i < string.length; i++) {
    if(string[i] != string[i].toUpperCase()) {
      word += string[i];
    } else {
      words.push(word);
      word = "";
      word += string[i].toLowerCase();
    }
  }
  words.push(word);
  return words.join(separator);
}