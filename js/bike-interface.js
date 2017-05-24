var Bike = require('./../js/bike.js').bikeModule;

var bikeLocation = function(location) {
};

var bikeThumbnail = function(thumbnail) {
};

var bikeManufacturer = function(bikeManufacturer, location, thumbnail) {
  $('.showStolenMaker').append("<li>" + "Manufacturer: " +  bikeManufacturer + "</li>" + "<li>" + location + "</li>" + "<br>"+ "<li>" + '</li><li> <img src="' + thumbnail + '" alt="No image available."</li><br><br>');
};

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#location-button').submit(function() {
    event.preventDefault();
    var location = $('#location').val();
    currentBikeObject.getBike(location, bikeLocation, bikeManufacturer, bikeThumbnail);
  });
});
