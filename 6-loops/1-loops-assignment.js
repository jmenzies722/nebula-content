// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
//    Each loop it should log to the console 'the current index is _'
for(let i = 0; i <= 30; i++){
    console.log(`the current index is ${i}`);
  }
  
  // 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
  //    Each loop it should log to the console the current index
  for (let i = 1; i <= 10; i += 2) {
    console.log(i);
  }
  
  // 3. Create an array with your top 5 celebrity names in it. 
  //    Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
  //    Loop over the array and log each celebrity's full name to the console.
  const celebrities = ['Tom Holland', 'Adam Sandler', 'Brad Pitt', 'Robert Downey Jr', 'Leonardo DiCaprio'];
  for (let i = 0; i < celebrities.length; i++) {
    console.log(celebrities[i]);
  }
  
  // 4. Loop over your celebrity list and 
  //    If a celebrity's full name has an even number of characters log it to the console
  for (let i = 0; i < celebrities.length; i++) {
    if (celebrities[i].length % 2 === 0) {
      console.log(celebrities[i]);
    }
  }
  
  // 5. Use the celebrity array for this question
  //    Create a for loop which will iterate over each element and output a new array of only first names
  const firstNames = [];
  for (let i = 0; i < celebrities.length; i++) {
    const nameParts = celebrities[i].split(' ');
    firstNames.push(nameParts[0]);
  }
  console.log(firstNames);
  
  // 6. Use the celebrity array for this question
  //    Create a for loop which will iterate over each element and output a new array of only last names
  const lastNames = [];
  for (let i = 0; i < celebrities.length; i++) {
    const nameParts = celebrities[i].split(' ');
    lastNames.push(nameParts[1]);
  }
  console.log(lastNames);
  
  // 7. Loop over the celebrity list and then loop through each name. 
  //    If a letter is a vowel, log it to the console
  for (let i = 0; i < celebrities.length; i++) {
    const name = celebrities[i];
    for (let j = 0; j < name.length; j++) {
      const letter = name[j].toLowerCase();
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        console.log(letter);
      }
    }
  }
  
  // 8. Loop over the celebrity list and then loop through each name. 
  //    If a letter is uppercase, log it to the console
  for (let i = 0; i < celebrities.length; i++) {
    const name = celebrities[i];
    for (let j = 0; j < name.length; j++) {
      const letter = name[j];
      if (letter === letter.toUpperCase()) {
        console.log(letter);
      }
    }
  }
  
  // 9. Convert your celebrity array to all caps and no spaces:
  //    Ex:
  //      Input:  ['Martha Stewart', 'David Beckham', etc..] 
  //      Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
  const capitalizedCelebrities = [];
  for (let i = 0; i < celebrities.length; i++) {
    capitalizedCelebrities.push(celebrities[i].toUpperCase().replace(' ', '-'));
  }
  console.log(capitalizedCelebrities);
  
  // 10. Index your array to find your favorite celebrity. 
  //     Save that name to a variable
  //     Loop over the array until you find that individual
  //     Log that name to the console and break out of the loop
  const favoriteCelebrity = 'Robert Downey Jr';
  for (let i = 0; i < celebrities.length; i++) {
    if (celebrities[i] === favoriteCelebrity) {
      console.log(celebrities[i]);
      break;
    }
  }
  
  // BONUS:
  //    Write a loop that iterates from zero until 30
  //    If an index is divisible by 2 log 'fizz'
  //    If an index is divisible by 3 log 'buzz'
  //    If an index is divisible by both 2 & 3, log 'fizz-buzz'
  //    Otherwise print the index to the console
  // BONUS:
//    Write a loop that iterates from zero until 30
//    If an index is divisible by 2 log 'fizz'
//    If an index is divisible by 3 log 'buzz'
//    If an index is divisible by both 2 & 3, log 'fizz-buzz'
//    Otherwise print the index to the console

for (let i = 0; i <= 30; i++) {
    // Check if the current index (i) is divisible by both 2 and 3
    if (i % 2 === 0 && i % 3 === 0) {
      console.log('fizz-buzz'); // Log 'fizz-buzz' to the console
    }
    // Check if the current index (i) is divisible by 2 only
    else if (i % 2 === 0) {
      console.log('fizz'); // Log 'fizz' to the console
    }
    // Check if the current index (i) is divisible by 3 only
    else if (i % 3 === 0) {
      console.log('buzz'); // Log 'buzz' to the console
    }
    // If none of the above conditions are met
    else {
      console.log(i); // Print the current index (i) to the console
    }
  }
  