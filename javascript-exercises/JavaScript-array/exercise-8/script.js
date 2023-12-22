function frequentItem(array) {
  let counter = 0;
  let maxItem;
  for(let i = 0; i < array.length; i++) {
    let currentItem = array[i];
    let innerCounter = 0;
    for(let j = 0; j < array.length; j++) {
      if(array[j] === array[i]) {
        innerCounter++
      }
    }
    if(innerCounter > counter) {
      counter = innerCounter;
      maxItem = currentItem;
    }
  }
  return `${maxItem} (${counter} times)`;
}