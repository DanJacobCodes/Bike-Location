function Bike(){

}

Bike.prototype.getBike = function(location, bikeLocation){
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=50&location='+location+'&distance=10&stolenness=proximity&access_token=response').then(function(response) {
  console.log(response);
  }).fail(function(error) {
    $('.showStolenLocation').text(error.responseJSON);
  });
};


exports.bikeModule = Bike;
