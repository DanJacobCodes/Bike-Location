function Bike(){

}

Bike.prototype.getBike = function(location, bikeLocation, bikeManufacturer, bikeThumbnail){
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=50&location=' + location + '&distance=10&stolenness=proximity&access_token=response').then(function(response) {
      var bikes = response.bikes;
      bikes.forEach(function(bike) {
        result = bikeLocation(bike.stolen_location);
        result1 = bikeThumbnail(bike.thumb);
        result2 = bikeManufacturer(bike.manufacturer_name, bike.stolen_location,bike.thumb);
        console.log(response)
      });

      return result, result1, result2;


  }).fail(function(error) {
    $('.showStolenLocation').text(error.responseJSON);
  });
};


exports.bikeModule = Bike;
