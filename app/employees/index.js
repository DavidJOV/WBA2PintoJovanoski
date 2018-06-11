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
        employeesArray = Array.from (JSON.parse(data));
        console.log("BEFORE:");
        for(i=0;i< employeesArray.length;i++){
            console.log(chalk.blue('\n name: '+employeesArray[i].name+
                                   '\n lastname: '+employeesArray[i].lastname)+
                         chalk.red('\n location: ',+employeesArray[i].location.latitude +" " +employeesArray[i].location.longitude)+
                                    '\n -----------------------------');
                }
        
     for(var i = 0; i<employeesArray.length;i++){
         employeesArray[i].location = randomLocation.randomCirclePoint(point,radius);
         
     }
     console.log("AFTER:");
     for(i=0;i< employeesArray.length;i++){
        console.log(chalk.blue('\n name: '+employeesArray[i].name+
                                '\n lastname: '+employeesArray[i].lastname)+
                    chalk.green('\n location: ',+employeesArray[i].location.latitude +" "+ employeesArray[i].location.longitude)+
                                 '\n -----------------------------');
            }
     fs.writeFileSync("employees.json",JSON.stringify(employeesArray),'utf8', function(err, data2){

    });
});}
    


fs.readFile(__dirname+'/employees.json', 'utf8', function (err, data) {
    obj = JSON.parse(data);
    console.log(data);

  });

router.post('/', (req, res) => {

    fs.writeFile("employees.json",JSON.stringify(obj),'utf8', function (err, data){
        
    });

   console.log('posted');
   res.send('POST route on Users.');
   
});

router.get('/', (req, res) => {

    res.send(obj);

 });

module.exports = router;