function findLongestWordLength(str) {
  let longestWordLength = 0;
  let currentWordLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentWordLength > longestWordLength) {
        longestWordLength = currentWordLength;
      }
      currentWordLength = 0;
    } else {
      currentWordLength++;
    }
  }
  if (currentWordLength > longestWordLength) {
    longestWordLength = currentWordLength;
  }
  return longestWordLength;
}
JavaScript Algorithms and Data Structures
