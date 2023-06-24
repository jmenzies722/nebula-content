// 1. Create a variable called `longString` and assign it a sentence of your choice that is at least 10 words long.
//    Use string methods to convert the sentence to all lowercase letters and log it to the console.
let longString = "Who was the first president of the United States of America"
let convertStr = longString.toLowerCase()
console.log(convertStr)
// 2. Create a variable called `myTemplate` and use a template literal to create a sentence of your choice.
//    Include at least 3 variables in the template literal.
const fistVar = "I"
const secVar = "like"
const thirdVar = "to"
let myTemplate = `${fistVar} ${secVar} ${thirdVar} to play basketball and video games`
console.log(myTemplate)
// 3. Create a variable called `text` and assign it a value of your choice.
//    Use indexing to log the last character of the text to the console.
let text = "Josh"
let lastChar = text[text.length-1]
console.log(lastChar)
// 4. Create a variable called `myString` and assign it a value of your choice.
//    Use string methods to slice the last 5 characters from the string and log it to the console.
let myString = "My String"
let fiveChar = myString.slice(-5)
console.log(fiveChar)
// 5. Create a variable called `someString` and assign it a value of your choice.
//    Use string methods to remove all whitespace from the string and log it to the console.
const someString = "  Hello  World  ";
const trimmedString = someString.split(" ").join("");
console.log(trimmedString);

// 6. Create a variable called `sentence` and assign it a value of your choice.
//    Use string methods to check if the sentence ends with a question mark and log the result to the console.
let sentence = "This is a sentence"
const questionMark = sentence.endsWith("?") // this will use the endsWith method to check if the string ends woth a specific character such as a ? which will return false if the ? is not present which it isnt 
console.log(questionMark)
// 7. Create a variable called myString and assign it a sentence of your choice that has at least one repeated word.
//    Use string methods to replace all occurrences of the repeated word with a different word of your choice and log it to the console.
let myStr = "I love traveling and coding"
const replaceStr = myStr.replace("traveling", "adventures")
console.log(replaceStr)
