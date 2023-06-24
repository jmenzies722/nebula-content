// Turn the following string into all lowercase letters
const noCaps = "This Should Not Have Capital Letters!"
console.log(noCaps.toLowerCase());
// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
console.log(loud.toUpperCase());
// Join the prior two variables together.
console.log(noCaps +  loud)
// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
const arrayOfNames = stringOfNames.split(' ');
console.log(arrayOfNames);
// Make your own mad-libs using a template literal
const verb1 = "playing";
const noun1 = "Basketball";
const noun2 = "video games";
const verb2 = "watching";
const noun3 = "anime";

const madLib = `I love ${verb1}, ${noun1}, ${noun2},  ${verb2} and ${noun3}.`;
console.log(madLib);

// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark";
const initials = ironMan
  .split(" ")
  .map(name => name.charAt(0))
  .join("");
console.log(initials);

// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!";
const newVariable = string.substring(string.indexOf("all-star"));
console.log(newVariable);

// Using the string "How are you?" extract the question mark.
const string1 = "How are you?";
const questionMark = string1.slice(-1);
console.log(questionMark);

// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';
console.log(Number(ten) + Number(five));
// Given the following sentence, turn it into an array.
const sentence = 'Welcome to the jungle!';
const sentenceArray = sentence.split(' '); //split method split sentence into array which results in each word becoming a sepreate element in the array 

console.log(sentenceArray);
