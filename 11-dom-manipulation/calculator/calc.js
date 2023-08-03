// Once the DOM is fully loaded, the function is executed.
document.addEventListener('DOMContentLoaded', () => {
  // Section 1: Variables and Objects
  // Selectors for input and output fields on the HTML page.
  const inputDiv = document.querySelector('.input');
  const outputDiv = document.querySelector('.output');

  // Maps spoken words to the corresponding mathematical operators.
  const wordToOperator = {
    'times': '*',
    'multiplied by': '*',
    'plus': '+',
    'minus': '-',
    'divided by': '/',
    'open': '(',
    'close': ')',
    'point' : '.',
    'percent' : '%'
};


  // Maps spoken word numbers to the corresponding numerical values.
  const numberWordsToNumbers = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10
  };

  // Section 2: Clearing the Input
  // Function to clear the input and output fields.
  function clearInput() {
      inputDiv.innerText = '';
      outputDiv.innerText = '';
  }

  // Section 3: Calculation Functions
  // The calculate function processes a string expression and evaluates it.
  function calculate(expression) {
      let numbers = [];
      let operators = [];
      let priority = {
          "+": 1,
          "-": 1,
          "*": 2,
          "/": 2
      };

      let segments = expression.match(/(\d+\.?\d*)|[\+\-\*\/]|%/g);

      for (let segment of segments) {
          if (!isNaN(segment)) {
              numbers.push(parseFloat(segment));
          } else {
              while (
                  operators.length &&
                  priority[segment] <= priority[operators[operators.length - 1]]
              ) {
                  doMath(numbers, operators);
              }
              operators.push(segment);
          }
      }

      while (operators.length) {
          doMath(numbers, operators);
      }

      return numbers[0];
  }

  // The doMath function executes the mathematical operations.
  function doMath(numbers, operators) {
      let num2 = numbers.pop();
      let num1 = numbers.pop();
      let op = operators.pop();

      switch (op) {
          case '+':
              numbers.push(num1 + num2);
              break;
          case '-':
              numbers.push(num1 - num2);
              break;
          case '*':
              numbers.push(num1 * num2);
              break;
          case '/':
              numbers.push(num1 / num2);
              break;
          case '%':
              numbers.push(num1 / 100);
              break;
      }
  }

  // Section 4: Processing the Input
  // Function that manages the input processing, calculation, and displaying of the result.
  function calculateInput() {
      let input = inputDiv.innerText.trim();
      if (input === '') return;
      try {
          input = input.replace(/\s*(\+|\-|\*|\/|\(|\))\s*/g, '$1');
          inputDiv.innerText = input;
          let output = calculate(input);
          outputDiv.innerText = output;
      } catch {
          outputDiv.innerText = "Error";
      }
  }

  // Section 5: Event Listeners on Keys
  // This loop sets an event listener on each key of the calculator.
  document.querySelectorAll('.key').forEach(key => {
      key.addEventListener('click', e => {
          const action = e.currentTarget.dataset.key;
          const text = e.currentTarget.innerText.trim();
          if (action === 'clear') {
              clearInput();
          } else if (action === 'backspace') {
              inputDiv.innerText = inputDiv.innerText.slice(0, -1);
          } else if (action === 'voice') {
              handleVoiceInput();
          } else if (action === '=') {
              calculateInput();
          } else {
              if (['+', '-', '*', '/'].includes(action)) {
                  inputDiv.innerText += ` ${action} `;
              } else {
                  inputDiv.innerText += ` ${text} `;
              }
          }
      });
  });

  // Section 6: Event Listener on Key Press
  // This event listener allows the user to use the calculator with their keyboard.
  document.addEventListener('keydown', e => {
      const key = e.key;
      const validKeys = '0123456789.+-*/()%';
      if(key === 'Enter') {
          calculateInput();
      } else if(key === 'Backspace') {
          inputDiv.innerText = inputDiv.innerText.slice(0, -1);
      } else if(key === 'Escape') {
          clearInput();
      } else if(validKeys.includes(key)) {
          if (['+', '-', '*', '/'].includes(key)) {
              inputDiv.innerText += ` ${key} `;
          } else {
              inputDiv.innerText += key;
          }
      }
  });

  // Section 7: Voice Recognition
  // Function responsible for voice recognition.
  function handleVoiceInput() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        for(let i = event.resultIndex; i < event.results.length; ++i) {
            if(event.results[i].isFinal) {
                let transcript = event.results[i][0].transcript.toLowerCase();
                for(let word in wordToOperator) {
                    const operator = wordToOperator[word];
                    transcript = transcript.replace(new RegExp(word, 'g'), operator);
                }
    
                for(let word in numberWordsToNumbers) {
                    const number = numberWordsToNumbers[word];
                    transcript = transcript.replace(new RegExp("\\b" + word + "\\b", 'g'), number);
                }
    
                inputDiv.innerText = transcript;
                calculateInput();
            }
        }
    };
    
  
    recognition.start();
  }
});
