function abbrevName(string) {
  let names = string.trim().split(" ");
  return names[0] + " " + names[1][0] + ".";
}