// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
let arrNum = (number) => {
    newArray = []; // placeholder empty new array 
    for(let i=0; i<number.length; i++) //iterating through the array 
    newArray.push(number[i] + 1)
    return newArray 
}
let number = [1,2,3]
let result = arrNum(number) 

console.log(result) // this will simply log out the array 

  // 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
  // Example string = "happy birthday", letter = "a", should return true
  // Example string = "happy birthday", letter = "q" should return false
  let strContainsLetter = (string, letter) => {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        return true;
      }
    }
    return false;
  };
  
  let string = 'Happy Birthday';
  let letter = 'a';
  console.log(strContainsLetter(string, letter)); // Output: true
  
  // 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
  // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
let getFirstName = (fullNames) => {
    let firstNames = []
    for(let i=0; i<fullNames.length; i++){
        let nameSpilt = fullNames[i].split(' ');
        let firstName = nameSpilt[0];
        firstNames.push(firstName)
    }
    return firstNames
}

let fullNames = ["Tom Smith", "Bob Jones", "Bill Williams"];
console.log(getFirstName(fullNames))
  // console.log(firstNames(names))
  // 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
  // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
  let greetPerson = (name, greeting) => {
    return `${greeting} ${name}`
  }

  let name = "Son-Goku"
  let greeting = "Goodnight"

console.log(greetPerson(name,greeting))

  // 5. Write a function that takes in the year someone was born and returns their age.
  // Example: birth year: 2000 returns 23
let calculateAge = (birthYear) => {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear
    return age
}
console.log(calculateAge(2001))

