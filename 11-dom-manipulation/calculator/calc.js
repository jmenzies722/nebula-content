document.addEventListener('DOMContentLoaded', () => {
  const inputDiv = document.querySelector('.input');
  const outputDiv = document.querySelector('.output');
  const wordToOperator = {
      'times': '*',
      'multiplied by': '*',
      'plus': '+',
      'minus': '-',
      'divided by': '/'
  };

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

  function clearInput() {
      inputDiv.innerText = '';
      outputDiv.innerText = '';
  }

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

  function calculateInput() {
      let input = inputDiv.innerText;
      if(input === '') return;
      try {
          let output = calculate(input);
          outputDiv.innerText = output;
      } catch {
          outputDiv.innerText = "Error";
      }
  }

  document.querySelectorAll('.key').forEach(key => {
      key.addEventListener('click', e => {
          const action = e.currentTarget.dataset.key;
          const text = e.currentTarget.innerText.trim();
          if(action === 'clear') {
              clearInput();
          } else if(action === 'backspace') {
              inputDiv.innerText = inputDiv.innerText.slice(0, -1);
          } else if(action === 'voice') {
              handleVoiceInput();
          } else if(action === '=') {
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
                // Convert 'x' and 'times' to '*'
                transcript = transcript.replace(/times/g, '*');
                transcript = transcript.replace(/x/g, '*');
  
                // Convert word numbers to actual numbers
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
