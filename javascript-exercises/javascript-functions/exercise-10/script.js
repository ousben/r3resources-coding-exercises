function identityMatrix(num) {
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      if(i === j) {
        console.log("1");
      } else {
        console.log("0");
      }
    }
    console.log("---------")
  }
}