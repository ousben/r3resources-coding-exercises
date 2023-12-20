function firstLetter(string) {
  let words = string.split(" ");
  let result = words.map(item => {
    return item[0].toUpperCase() + item.slice(1, item.length).toLowerCase();
  })
  return result.join(' ');
}

console.log(firstLetter('the qUiCk brown fox'));