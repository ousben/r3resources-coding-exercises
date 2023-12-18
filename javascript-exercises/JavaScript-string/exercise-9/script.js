function capitalizeWords(string) {
  let word = string.trim().split(' ');
  let words = word.map(item => {
    return item[0].toUpperCase() + item.slice(1, item.length);
  });
  return words.join(' ');
}