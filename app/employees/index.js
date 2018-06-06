var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var randomLocation = require('random-location');
var obj;
var employeesArray;



function generateEmployeesLocation(){ // generating random location for each employee in employees.json (with a radiusg)
    const point = {
        latitude: 51.02299,    //Location von TH KÖLN GM
        longitude: 7.561990000000037
      }
      const radius = 10000; // 10KM radius
      fs.readFile('employees.json','utf8', function(err, data){
        employeesArray = Array.from (JSON.parse(data).employees);
        console.log(employeesArray[0].name);
     for(var i = 0; i<employeesArray.length;i++){
         employeesArray[i].location = randomLocation.randomCirclePoint(point,radius);
         
     }
     fs.writeFileSync("employees.json",JSON.stringify(employeesArray),'utf8', function(err, data2){

    });
});}
    



/*fs.readFile(__dirname+'/employees.json', 'utf8', function (err, data) {
    obj = JSON.parse(data);
    //console.log(data);

  }
  );*/

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
generateEmployeesLocation();

module.exports = router;
