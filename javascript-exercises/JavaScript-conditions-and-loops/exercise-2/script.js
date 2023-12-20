function productSign(array) {
  let negativeItems = array.filter(item => {
    if(item < 0) {
      return item
    }
  })
  if(negativeItems.length % 2 === 0) {
    return "The sign is positive";
  } else {
    return "The sign is negative";
  }
}