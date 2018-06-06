var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var randomLocation = require('random-location');
var obj;


function getEmployeesLocation(){
    const point = {
        latitude: 51.02299,
        longitude: 7.561990000000037
      }
      const radius = 10000;
        
     
     for(var i = 0; i<5;i++){
         console.log(randomLocation.randomCirclePoint(point,radius));
     }
    
}


fs.readFile(__dirname+'/employees.json', 'utf8', function (err, data) {
    obj = JSON.parse(data);
    //console.log(data);

  }
  );

router.post('/', (req, res) => {

    fs.writeFile("employees.json",JSON.stringify(obj),'utf8', function (err, data){
        
    });

   console.log('posted');
   res.send('POST route on Users.');
   
});

router.get('/', (req, res) => {

    console.log('got');
    res.send(obj);
    console.log("really got");

 });
getEmployeesLocation();
getEmployeesLocation();
module.exports = router;
