// 1.   Given an array of strings
//      Loop over the array of strings
//      And loop over each string.
//      If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel'];

for (let i = 0; i < names.length; i++) {
  let currentWord = names[i];
  
  for (let j = 0; j < currentWord.length; j++) {
    // Check if the current letter is 'a' (case insensitive)
    if (currentWord[j].toLowerCase() === 'a') {
      console.log(currentWord);
      break; // If a word contains 'a', no need to check remaining letters
    }
  }
}

// 2.   Given an array of strings
//      Loop over the array
//      And loop over each string.
//      Create a new array of strings where every other letter in each string is capitalized 
//      Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
const stringArray = ['This', 'is', 'an', 'array', 'of', 'strings'];
const capitalizedArray = [];

for (let i = 0; i < stringArray.length; i++) {
  let currentWord = stringArray[i];
  let newWord = '';

  for (let j = 0; j < currentWord.length; j++) {
    // Check if the index of the current letter is odd (every other letter)
    if (j % 2 === 1) {
      newWord += currentWord[j].toUpperCase(); // Capitalize the letter
    } else {
      newWord += currentWord[j]; // Keep the letter as it is
    }
  }

  capitalizedArray.push(newWord);
}

console.log(capitalizedArray);
// 3.   Given an array of arrays of numbers (nested array)
//      Add all the inner values up and push them into a single array
//      Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]];
const sumArray = [];

for (let i = 0; i < arrayOfArrays.length; i++) {
  let currentArray = arrayOfArrays[i];
  let sum = 0;

  for (let j = 0; j < currentArray.length; j++) {
    sum += currentArray[j]; // Add the current value to the sum
  }

  sumArray.push(sum); // Push the sum to the resulting array
}

console.log(sumArray);
