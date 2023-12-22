function computeSumAndProduct(array) {
  let sum = 0;
  let product = 1;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
    product *= array[i];
  }
  return `The sum is equal to : ${sum} & the product is equal to ${product}`;
}