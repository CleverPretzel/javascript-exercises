const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev, curr) => prev * curr);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  if (num === 0) return 1;
	let factorial = num;
  for (i = 1; i < num; i++) factorial *= i;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
