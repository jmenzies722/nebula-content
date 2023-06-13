

// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

function HorsePosition(position, horseName) { 
    if (position === 1) {
      return `${horseName} finished in first place!`;
    } else if (position === 2) {
      return `${horseName} finished in second place!`;
    } else if (position === 3) {
      return `${horseName} finished in third place!`;
    } else {
      return `${horseName} did not finish in the top 3.`;
    }
  }
  
  const position = Math.floor(Math.random() * 4) + 1;
  const horseName = "Lightning";
  

  const result = HorsePosition(position, horseName);
  console.log(result);
  