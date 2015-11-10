var roundToNearestTenth = function(number) {
  return Math.round(parseFloat(number)*10)/10;
}

exports.celciusToFahrenheit = function(celcius) {
  return roundToNearestTenth(celcius * 9/5 + 32);
}

exports.fahrenheitToCelcius = function(fahrenheit) {
  return roundToNearestTenth((fahrenheit - 32) * 5/9);
}
