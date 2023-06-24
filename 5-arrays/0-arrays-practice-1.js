// Declare an empty array
let emptyArr = []
console.log(emptyArr)
// Declare an array with all the data types you can think of within it
let dataTypes = [42, "Hello", true, undefined, null, {}, Symbol('foo')]
console.log(dataTypes)
// Make a list of classmates names first names in an array
let classmates = ["Spongebob","Patrick","Sandy","Josh","Plankton","Gary"]
console.log(classmates)
// Get the length of that previous array
let prevArrLength = classmates.length;
console.log(prevArrLength);
// Check the type of the previous array
let prevArrType = typeof classmates;
console.log(prevArrType);
// Check if the previous array is an array
console.log(Array.isArray(classmates));
// Using indexing, grab your name from that previous array
let myName = classmates[3];
console.log(myName);
// Use the following variable to get the student at the index from the array of students
let index = 2; 
let studentIndez = classmates[index]
console.log(studentIndez)
// Update the array to have each element as a students first and last name : 'firstName lastName'
let lastNames = ["Squarepants", "Star", "Cheeks", "Menzies", "Sheldon", "Snail"];
let classmatesFullNames = classmates.map(function(name, index) {
    return name + " " + lastNames[index];
  });
  console.log(classmatesFullNames);
