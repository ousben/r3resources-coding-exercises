function camelize(string) {
  let word = string.trim().split(" ");
  let words = word.map(item => {
    if(item === word[0]) {
      return item.toLowerCase();
    } else {
      return item[0].toUpperCase() + item.slice(1, item.length).toLowerCase();
    }
  })
  return words.join("");
}