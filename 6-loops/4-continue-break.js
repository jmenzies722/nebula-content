// Task 1
const array = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 'a') {
    console.log('a');
    break; // Stops the loop immediately after finding 'a'
  }
}
// Output: 'a'

// Task 2
const arrayOne = ['a', 'b', 'c', 100, 'e'];
for (let i = 0; i < arrayOne.length; i++) {
  if (typeof arrayOne[i] === 'number') {
    console.log(`at index ${i} there is the number ${arrayOne[i]}`);
    break; // Stops the loop immediately after finding a number
  }
}
// Output: 'at index 3 there is the number 100'

// Task 3
const originalArray = [1, 'a', 2, 'b', 3, 'c'];
const newArray = [];
for (let i = 0; i < originalArray.length; i++) {
  if (typeof originalArray[i] === 'number') {
    continue; // Skips the current iteration if the element is a number
  }
  newArray.push(originalArray[i]); // Adds non-number elements to the new array
}
console.log(newArray);