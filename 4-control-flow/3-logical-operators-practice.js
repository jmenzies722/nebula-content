// If x or y is equal to 42, log 'I see you've found the ultimate answer to life, the universe and everything.'
let x = 42;
let y = 10;

if (x === 42 || y === 42) {
  console.log("I see you've found the ultimate answer to life, the universe and everything.");
}

// Save your name to a variable called name
let name = "Josh";
// If your name has less than 10 characters, then log 'You'll need more characters!' to the console.
// Otherwise, log 'I see you've got enough characters!' to the console.
if (name.length < 10) {
  console.log("You'll need more characters!");
} else {
  console.log("I see you've got enough characters!");
}

// Create the following if statement:
// If this month (1-12) is after March and before December, log 'Winter is Coming!'
let currentMonth = 6;

if (currentMonth > 3 && currentMonth < 12) {
  console.log("Winter is Coming!");
}

// Create two variables a & b initialized as numbers
let a = 5;
let b = 10;

// Write the following if statement
// If a is greater than b, log 'a is greater than b'
// If a is less than b, log 'a is less than b'
// Otherwise, log 'a is equal to b'
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}
