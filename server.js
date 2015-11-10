var express = require('express'),
  moment = require('moment'),
  convert = require('./convert')

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.get('/celciusToFahrenheit', function(req, res) {
  var celciusTemperature = parseFloat(req.query.c);
  var fahrenheitTemperature = convert.celciusToFahrenheit(celciusTemperature);
  res.send(celciusTemperature + '&#8451 is ' + fahrenheitTemperature + '&#8457 to the nearest tenth.');
});

app.get('/fahrenheitToCelcius', function(req, res) {
  var fahrenheitTemperature = parseFloat(req.query.f);
  var celciusTemperature = convert.fahrenheitToCelcius(fahrenheitTemperature);
  res.send(fahrenheitTemperature + '&#8457 is ' + celciusTemperature + '&#8451 to the nearest tenth.');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
