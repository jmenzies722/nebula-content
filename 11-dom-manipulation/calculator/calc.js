let currentResult = "";

function appendNumber(number) {
  currentResult += number;
  document.getElementById("result").value = currentResult;
}

function appendOperator(operator) {
  currentResult += operator;
  document.getElementById("result").value = currentResult;
}

function calculateResult() {
  let result = eval(currentResult);
  document.getElementById("result").value = result;
  currentResult = result.toString();
}

function clearResult() {
  currentResult = "";
  document.getElementById("result").value = "";
}
