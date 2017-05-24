var Bike = require('./../js/bike.js').bikeModule;

var bikeLocation = function(location) {
  $('.showStolenLocation').text("All stolen bikes in " + location);
};

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#location-button').click(function() {
    var location = $('#location').val();
    currentBikeObject.getBike(location, bikeLocation);
  });
});
