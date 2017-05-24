var Bike = require('./../js/bike.js').bikeModule;

var bikeLocation = function(location) {
  $('.showStolenLocation').append("All stolen bikes in " + "<li>" + location +"</li>");
};
var bikeManufacturer = function(bikeManufacturer) {
  $('.showStolenMaker').append("Here are the manufacturer names:" + "<li>" + bikeManufacturer +"</li>");
};

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#location-button').submit(function() {
    event.preventDefault();
    var location = $('#location').val();
    currentBikeObject.getBike(location, bikeLocation, bikeManufacturer);
  });
});
