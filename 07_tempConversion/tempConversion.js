const convertToCelsius = function(tempFarenheit) {
  let tempCelsius = (tempFarenheit-32)*(5/9);
  return Math.round(tempCelsius*10)/10;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFarenheit = (tempCelsius*(9/5))+32;
  return Math.round(tempFarenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
