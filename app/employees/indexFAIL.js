
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var chalk = require('chalk');
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
        console.log("BEFORE:")
          console.log(chalk.red(data));
        employeesArray = Array.from(JSON.parse(data));

     for(var i = 0; i<employeesArray.length;i++){
         employeesArray[i].location = randomLocation.randomCirclePoint(point,radius);
         
     }
     
     console.log("AFTER:");
     for(i=0;i< employeesArray.length;i++){
        console.log(chalk.green('\n name: '+employeesArray[i].name+
        '\n lastname: '+employeesArray[i].lastname+
        '\n location: ',+employeesArray[i].location),
                '\n -----------------------------');

             employeesArray = JSON.stringify(employeesArray);});
     fs.writeFileSync("employees.json",employeesArray,'utf8', function(err, data2){

     });
}
    



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
