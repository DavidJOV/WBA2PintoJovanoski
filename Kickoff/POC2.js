
 
 
 
 const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCjUYojtw3cBQKz36rfdHKhq1XcCZMTQT0',
    origin: "75 9th Ave New York, NY",
destinations: "Bridgewater Commons, Commons Way, Bridgewater, NJ|The Mall At Short Hills, Morris Turnpike, Short Hills, NJ|Monmouth Mall, Eatontown, NJ|Westfield Garden State Plaza, Garden State Plaza Boulevard, Paramus, NJ|Newport Centre Mall, Jersey City, NJ",
departure_time: "1541202457",
traffic_model: "best_guess",
mode: "driving",

    Promise: Promise
  });
  

  googleMapsClient.geocode({address: 'Pizzone, Leverkusen'})
    .asPromise()
    .then((response) => {
      console.log(response.json.results);
    })
    .catch((err) => {
      console.log(err);
    });

    var origin1 = new google.maps.LatLng(55.930385, -3.118425);
var origin2 = 'Greenwich, England';
var destinationA = 'Stockholm, Sweden';
var destinationB = new google.maps.LatLng(50.087692, 14.421150);

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: 'DRIVING',
    transitOptions: TransitOptions,
    drivingOptions: DrivingOptions,
    unitSystem: UnitSystem,
    avoidHighways: Boolean,
    avoidTolls: Boolean,
  }, callback);

function callback(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.
}