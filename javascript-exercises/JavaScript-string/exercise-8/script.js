function capitalize(string) {
  let firstLetter = string[0].toUpperCase();
  let restOfString = string.slice(1, string.length);
  return firstLetter + restOfString;
}