var should = require('should'),
  convert = require('../convert');
  // rewire = require('rewire'),
  // convert = rewire('../convert');

describe('helionce-node/homepage', function (done) {
  var context = {};

  before(function (done) {
    done();
  }),

  // it('should round to the nearest tenth', function () {
  //   var roundToNearestTenth = convert.__get__('roundToNearestTenth');
  //   roundToNearestTenth(1.22).should.be.equal(1.2);
  //   roundToNearestTenth(-1.22).should.be.equal(-1.2);
  //   roundToNearestTenth(11.56).should.be.equal(11.6);
  //   roundToNearestTenth(-11.51).should.be.equal(-11.5);
  // })

  it('should convert celcius to fahrenheit', function () {
    var result = convert.celciusToFahrenheit(10);
    result.should.be.equal(50);
    result = convert.celciusToFahrenheit(50);
    result.should.be.equal(122);
    result = convert.celciusToFahrenheit(101);
    result.should.be.equal(213.8);
    result = convert.celciusToFahrenheit(-29);
    result.should.be.equal(-20.2);
  });

  it('should convert fahrenheit to celcius', function () {
    var result = convert.fahrenheitToCelcius(80);
    result.should.be.equal(26.7);
    result = convert.fahrenheitToCelcius(16);
    result.should.be.equal(-8.9);
    result = convert.fahrenheitToCelcius(0);
    result.should.be.equal(-17.8);
    result = convert.fahrenheitToCelcius(-19);
    result.should.be.equal(-28.3);
  });

  it('should convert 0 fahrenheit to 100 celcius', function () {
    convert.fahrenheitToCelcius(0).should.be.equal(100);
  });

});
