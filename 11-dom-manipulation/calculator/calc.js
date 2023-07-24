let calculator = {
  // This variable stores the current result of the calculator
  currentResult: "",

  // This function appends a number to the current result
  appendNumber(number) {
    // Concatenate the new number to the current result
    this.currentResult += number;
    // Update the 'result' element in the HTML with the new current result
    document.getElementById("result").value = this.currentResult;
  },

  // This function appends an operator to the current result
  appendOperator(operator) {
    // Concatenate the new operator to the current result
    this.currentResult += operator;
    // Update the 'result' element in the HTML with the new current result
    document.getElementById("result").value = this.currentResult;
  },

  // This function calculates the result of the current result
  calculateResult() {
    // Perform the calculation and store the result
    let result = this.performCalculation(this.currentResult);
    // Update the 'result' element in the HTML with the result
    document.getElementById("result").value = result;
    // Store the result as the new current result
    this.currentResult = result.toString();
  },

  // This function clears the current result
  clearResult() {
    // Reset the current result to an empty string
    this.currentResult = "";
    // Update the 'result' element in the HTML with the new current result
    document.getElementById("result").value = "";
  },

  // This function performs a calculation based on an expression string
  performCalculation(expression) {
    // Split the expression string into a number, an operator, and another number
    let [num1, operator, num2] = expression.split(/(\D)/);
    // Convert the number strings to float numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Perform the calculation based on the operator and return the result
    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num1 / num2;
      default: 
        // If the operator is unknown, log an error and return 0
        console.error('Unknown operator', operator); 
        return 0;
    }
  }
}

// Example usage:
// Append the number '5'
calculator.appendNumber('5');
// Append the operator '+'
calculator.appendOperator('+');
// Perform the calculation
calculator.calculateResult();
// Clear the result
calculator.clearResult();
