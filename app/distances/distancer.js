var fs = require('fs');
var distance=require("google-distance");
distance.apiKey ="AIzaSyCjUYojtw3cBQKz36rfdHKhq1XcCZMTQT0";

var start = ["51.05214835762436,7.674460939198773"];
var dest = ["TH Köln Campus Gummersbach"];
var distanceToCustemor;

var getDistance = function (origin,destination,returnDistance)
{
    var distanceToCustemor;
        distance.get({
        origins: [origin],
        destinations: [destination]},function(err, data) {

            if (err) return console.log(err);
          
            distanceToCustemor= data[0].distanceValue;
        // console.log("DISTANCE: "+distanceToCustemor);
         returnDistance(distanceToCustemor);
         
       //  var distanceToCustemorForJSON= {
       //      distance: distanceToCustemor
       //  }
         //fs.appendFile("distances.json",JSON.stringify(distanceToCustemorForJSON));
         
         
          });
        //  setTimeout(() => { console.log("I NEED TO WAIT FOR THE CALL BACK :"+distanceToCustemor);},0);
          //setTimeout(() => { return distanceToCustemor},0);
          //setTimeout(() => {  console.log("I WAITED FOR THE CALL BACK :"+distanceToCustemor);},0);
        };


        





var exports = module.exports = {};
exports.getDistance = getDistance;