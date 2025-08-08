const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((res, num) => res * num, 1);
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
