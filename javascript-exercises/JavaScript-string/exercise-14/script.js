function insert(mainString, string, position) {
  let separatedString1 = mainString.slice(0, position);
  let separatedString2 = mainString.slice(position, mainString.length);
  return separatedString1 + string + separatedString2;
}
