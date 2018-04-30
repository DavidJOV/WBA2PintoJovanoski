var	fs = require('fs');

var chalk = require('chalk');
// tim aha
var obj;

var obj2;

var obj3;

 fs.readFile("staedte.json",'utf8',	function(err,	data1)	{
    fs.readFile("mehr_staedte.json",'utf8',	function(err,	data2)	{

    if (err) throw err;
    obj = JSON.parse(data1);

    obj2 = JSON.parse(data2);
   
    obj3 = Array.from(obj.cities).concat(Array.from(obj2.cities));
 
    obj3.sort(function (a,b){

    return a.population - b.population; 
    
 });
    
    fs.writeFile("concatcities.json",JSON.stringify(obj3),'utf8', function(err, data){

        

        for(i=0;i< obj3.length;i++){
        
        console.log(chalk.blue('\n','name: ',obj3[i].name),
                    chalk.red('\n country: ',obj3[i].country),
                    chalk.yellow( '\n population: ',obj3[i].population),
                '\n --------------');
    }

    });
    
});
}); 