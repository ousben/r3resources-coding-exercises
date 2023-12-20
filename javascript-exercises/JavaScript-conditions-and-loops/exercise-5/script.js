function oddOrEven(num) {
  for(let i = 0; i <= num; i++) {
    if(i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
  return "The check is over";
}