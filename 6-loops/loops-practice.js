// 1. Print numbers from 1 to 10 using a `for` loop.
// for(let i=1; i<=10; i++){
//     console.log(i)
// }
// 2. Print even numbers between 1 and 20 using a `while` loop.
let number = 1; 

while(number < 20){
    if(number % 2 === 0){
        console.log(number);
    }
    number++;
}
console.log(number)
// 3. Calculate the sum of all numbers between 1 and 100 using a `do-while` loop.
let num = 1 
let sum = 0 
do{
    sum += num 
    num++
}while(num < 100)

console.log(sum)
// 4. Print the elements of an array using a `for...of` loop.

// 5. Calculate the factorial of a given number using a `for` loop.

// 6. Reverse a string using a `for` loop.
let stringName = "Josh"
let reversedString = ''
for(let i = stringName.length-1; i >= 0; i--){
    reversedString += stringName[i]
}
console.log(reversedString)
// 7. Find the maximum number in an array using a `for` loop.


// 8. Print the Fibonacci sequence up to a given number using a `while` loop.

// 9. Count the number of vowels in a string using a `for...of` loop.

// 10. Determine if a number is prime using a `for` loop.

// Try to solve these problems on your own. If you get stuck or need help, feel free to ask for assistance with a specific problem.