function readingStatus(list) {
  for(let i = 0; i < list.length; i++) {
    let result = [];
    for(let j = 0; j < Object.keys(list[i]).length; j++) {
      result.push(Object.values(list[i])[j]);
    }
    console.log(`the book name is "${result[1]}", it was written by ${result[0]} and the status is : ${result[2]}`);
  }
}