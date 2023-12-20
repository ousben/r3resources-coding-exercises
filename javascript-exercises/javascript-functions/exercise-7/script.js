function numberVowels(string) {
  let counter = 0;
  let lowerString = string.trim().toLowerCase();
  let vowels = ["a", "e", "i", "o", "u", "y"];
  for(let i = 0; i < lowerString.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if(lowerString[i] === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
}