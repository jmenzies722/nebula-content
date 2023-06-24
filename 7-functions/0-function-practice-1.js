// 1. Write a function that takes in 1 number and returns that number + 1
function oneNum(number){
    return number + 1;
}
console.log(oneNum(1000000000000000))

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
let sayGoodnight = (name) => {
    return `goodnight ${name} `
}
console.log(sayGoodnight('Josh'))

// 3. Write a function that takes in an array of numbers. If that array includes the number 0, return 'This array has the number zero in it'.
function hasZero(arr) {
    if (arr.includes(0)) {
      return 'This array has the number zero in it';
    } else {
      return 'This does not have zero';
    }
  }
  
  let arrayNum = [0, 1, 2, 3, 4, 5];
  console.log(hasZero(arrayNum));
  
  // 4. Write a function that console logs 'hello world' 10 times to the console.
  function logWord() {
    for (let i = 0; i < 10; i++) {
      console.log('Hello World');
    }
  }
  
  logWord()
  
//   // 5. Write the prior function utilizing a 'fat arrow' function.
//   let newLog = () => {
//     for (let i = 0; i < 10; i++) {
//       console.log('Hello World');
//     }
//   };
  
//   newLog(); // No need to log the return value