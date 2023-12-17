function protectEmail(string) {
  let parts = string.trim().split("@");
  let half = Math.ceil(parts[0].length / 2) - 1;
  let name = parts[0].slice(0, half);
  return name + "...@" + parts[1];
}