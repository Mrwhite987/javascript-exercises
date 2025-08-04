const convertToCelsius = function (fahTemp) {
  const celTemp = (fahTemp - 32) * (5 / 9);
  return roundToOneDecimal(celTemp);
};

const convertToFahrenheit = function (celTemp) {
  const fahTemp = celTemp * (9 / 5) + 32;
  return roundToOneDecimal(fahTemp);
};

const roundToOneDecimal = (num) => Math.round(num * 10) / 10;

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
