const convertToCelsius = function(fahrenheit) {

  let expression = (fahrenheit - 32) * 5/9;
  return Number.isInteger(expression) ? expression : Number(expression.toFixed(1));

};

const convertToFahrenheit = function(celsius) {
  let expression = celsius * 9/5 + 32;
  return Number.isInteger(expression) ? expression : Number(expression.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
