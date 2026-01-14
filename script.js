let display;
let current = "";
let previous = "";
let operator = "";

window.onload = function () {
  display = document.getElementById("display");
};

function pressNumber(num) {
  current += num;
  display.value = current;
}

function pressOperator(op) {
  if (current === "") return;

  if (previous !== "") {
    calculate();
  }

  operator = op;
  previous = current;
  current = "";
}

function calculate() {
  if (previous === "" || current === "") return;

  let num1 = parseFloat(previous);
  let num2 = parseFloat(current);
  let result;

  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "/") result = num1 / num2;

  display.value = result;
  current = result.toString();
  previous = "";
  operator = "";
}

function clearAll() {
  current = "";
  previous = "";
  operator = "";
  display.value = "";
}

function deleteOne() {
  current = current.slice(0, -1);
  display.value = current;
}
