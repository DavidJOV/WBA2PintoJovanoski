var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var chalk = require('chalk');
var randomLocation = require('random-location');
var obj;
var employeesArray;
var distance = require('../distances/distancer.js');
var distanceArray;



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
/*
function getNearestEmployee(custmorAdress){
var p = new Promise(function(resolve, reject) {
    fs.readFile('employees.json','utf8', function(err, data){
        employeesArray = Array.from (JSON.parse(data));
 
        if (err) 
        reject(err); 
    else 
        resolve(data);
});

});


p
.then(function(){
     distanceArray = [employeesArray.length];
      
    for(i=0;i< employeesArray.length;i++){
       var origin = employeesArray[i].location.latitude +","+ employeesArray[i].location.longitude;
       overGive(i,function(i){


        distance.getDistance(origin,custmorAdress,function(distanceToCustmor){
            
             distanceArray[i]= {
                distance: distanceToCustmor,
                employeeName: employeesArray[i].name,
                employeeLastname: employeesArray[i].lastname,
                employeeSpezialgebiet: employeesArray[i].Spezialgebiet
                
             }

            });}

);}

})
.then(function(){

    distanceArray.sort(function(a,b){
        return b.distance - a.distance;});
    
}).then(function(){
    console.log(distanceArray[0].distance);
})



}
*/



function getNearestEmployee(custmorAdress){
    fs.readFile('employees.json','utf8', function(err, data){
        employeesArray = Array.from (JSON.parse(data));
        var distanceArray = [employeesArray.length];
      
        for(i=0;i< employeesArray.length;i++){
           var origin = employeesArray[i].location.latitude +","+ employeesArray[i].location.longitude;
           overGive(i,function(i){


           distance.getDistance(origin,custmorAdress,function(distanceToCustmor){
               
                distanceArray[i]= {
                   distance: distanceToCustmor,
                   employeeName: employeesArray[i].name,
                   employeeLastname: employeesArray[i].lastname,
                   employeeSpezialgebiet: employeesArray[i].Spezialgebiet
                   
                }
                if(distanceArray[i-1]!=undefined){
                    let temp;
                    if(distanceArray[i-1].distance > distanceArray[i].distance){
                        temp = distanceArray[i-1];
                        distanceArray[i-1] = distanceArray[i];
                        distanceArray[i]=temp;
                    }
                }
                console.log(JSON.stringify(distanceArray[0]));
                //console.log("Mitarbeiter: "+i+" "+JSON.stringify(distanceArray[i].employeeName)+" "+JSON.stringify((distanceArray[i].distance)/1000)+" KM"); //muss noch sortiert werden
               /*sortIT(distanceArray,function(distanceArray){

                  distanceArray =  distanceArray.sort(function(a,b){
                        return b.distance - a.distance;
                    });
                    
                });
                ------------------------------------------------------
                var sortedDistanceArray = [distanceArray.length];
                distanceArray.sort(function(a,b){
                    return b.distance - a.distance;});
                for(var j=0;j<distanceArray.length;j++){
                    sortedDistanceArray[j] = distanceArray[j];
                    
                }
                ------------------------------------------------------------
                console.log(sortedDistanceArray);
              
                //console.log("Mitarbeiter: "+i+" "+ JSON.stringify(distanceArray[i]));//muss noch sortiert werden
               
               */
               // console.log("Mitarbeiter: "+JSON.stringify(distanceArray)); //muss noch sortiert werden
                
                
            });
            
            
        }
    
    );


        }
         
    });}

function sortIT(array,sortIT){  // not used yet
    sortIT(array);
}        

function overGive(i,callback){
    callback(i);
}

getNearestEmployee("TH KOELN CAMPUS GUMMERSBACH");

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
//generateEmployeesLocation();

module.exports = router;