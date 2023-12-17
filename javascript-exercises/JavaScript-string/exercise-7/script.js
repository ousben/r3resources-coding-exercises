function stringParameterize(string, separator) {
  let words = string.trim().toLowerCase().split(" ");
  return words.join(separator);
}