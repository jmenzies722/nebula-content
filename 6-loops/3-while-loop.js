// Reminder: control-c will kill an infinitely running node-process

// 1.   Write a while loop that loops over a string until it finds the letter "a"

let str = "example string";
let index = 0;

while (index < str.length) {
  if (str[index] === "a") {
    break;
  }
  index++;
}

console.log("Found 'a' at index", index);


// 2.   Write a while loop that logs to the console the 'count' until the 'count' reaches 100
//      Inside the while loop be sure to increase count by some number

let count = 0;

while (count < 100) {
  count += 10;
  console.log(count);
}
