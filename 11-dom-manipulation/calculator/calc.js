const keys = document.querySelectorAll('.key');
const displayInput = document.querySelector('.display .input');
const displayOutput = document.querySelector('.display .output');
const modeButtons = document.querySelectorAll('.mode-btn');
const multiMode = document.querySelector('.multi-mode');

let input = "";
let currentMode = 'normal'; // Default mode is normal calculator mode

// Add event listeners to mode buttons
modeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentMode = btn.dataset.mode;
    displayInput.textContent = `Mode: ${currentMode.toUpperCase()} - Enter the value`;
    displayOutput.textContent = "";
    input = "";
    multiMode.style.display = 'block'; // Show the multi-mode section
  });
});

// Add event listeners to calculator keys
keys.forEach(key => {
  const value = key.dataset.key;

  key.addEventListener('click', () => {
    if (value === "clear") {
      input = "";
      displayInput.textContent = "";
      displayOutput.textContent = "";
    } else if (value === "backspace") {
      input = input.slice(0, -1);
      displayInput.textContent = CleanInput(input);
    } else if (value === "=") {
      let result;
      if (currentMode === 'tip') {
        let billAmount = parseFloat(document.getElementById('tip-bill-input').value);
        let tipPercentage = parseFloat(document.getElementById('tip-percentage-input').value);
        let tipAmount = (billAmount * tipPercentage) / 100;
        result = tipAmount;
      } else {
        result = eval(PrepareInput(input));
      }
      displayOutput.textContent = CleanOutput(result);
    } else if (value === "brackets") {
      if (
        input.indexOf("(") == -1 || 
        input.indexOf("(") != -1 && 
        input.indexOf(")") != -1 && 
        input.lastIndexOf("(") < input.lastIndexOf(")")
      ) {
        input += "(";
      } else if (
        input.indexOf("(") != -1 && 
        input.indexOf(")") == -1 || 
        input.indexOf("(") != -1 &&
        input.indexOf(")") != -1 &&
        input.lastIndexOf("(") > input.lastIndexOf(")")
      ) {
        input += ")";
      }

      displayInput.textContent = CleanInput(input);
    } else {
      if (ValidateInput(value)) {
        input += value;
        displayInput.textContent = CleanInput(input);
      }
    }
  });
});

function CleanInput(input) {
  let input_array = input.split("");
  let input_array_length = input_array.length;

  for (let i = 0; i < input_array_length; i++) {
    if (input_array[i] === "*") {
      input_array[i] = ` × `;
    } else if (input_array[i] === "/") {
      input_array[i] = ` ÷ `;
    } else if (input_array[i] === "%") {
      input_array[i] = ` % `;
    }
  }

  return input_array.join("");
}

function CleanOutput(output) {
  return output.toLocaleString();
}

function ValidateInput(value) {
  let lastInput = input.slice(-1);
  let operators = ["+", "-", "*", "/"];

  if (value === "." && lastInput === ".") {
    return false;
  }

  if (operators.includes(value)) {
    if (operators.includes(lastInput)) {
      return false;
    } else {
      return true;
    }
  }

  return true;
}

function PrepareInput(input) {
  let input_array = input.split("");

  for (let i = 0; i < input_array.length; i++) {
    if (input_array[i] === "%") {
      input_array[i] = "/100";
    }
  }

  return input_array.join("");
}
