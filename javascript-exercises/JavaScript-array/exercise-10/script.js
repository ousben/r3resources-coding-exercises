function rowFunction(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(`row ${i}`);
    console.log(` ${array[i][0]}`);
    console.log(` ${array[i][1]}`);
    console.log(` ${array[i][2]}`);
    console.log(` ${array[i][3]}`);
  }
  return "it's over";
}