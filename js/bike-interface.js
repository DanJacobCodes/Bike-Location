var Bike = require('./../js/bike.js').bikeModule;

var bikeLocation = function(location) {
};
var bikeManufacturer = function(bikeManufacturer, location) {
  $('.showStolenMaker').append("Here are the manufacturer names: " + "<li>" + bikeManufacturer + " " + location + "</li>");
};

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#location-button').submit(function() {
    event.preventDefault();
    var location = $('#location').val();
    currentBikeObject.getBike(location, bikeLocation, bikeManufacturer);
  });
});
