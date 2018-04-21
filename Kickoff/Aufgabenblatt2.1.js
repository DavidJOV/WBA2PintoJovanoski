var	fs	=	require('fs');
var chalk = require('chalk');
var contents;
var contents2;
var contents3;

 fs.readFile("staedte.json",'utf8',	function(err,	data1)	{
    fs.readFile("mehr_staedte.json",'utf8',	function(err,	data2)	{
  if (err) throw err;
    contents = JSON.parse(data1);
  contents.cities.sort(function (a,b){
     return a.population - b.population;
  });

  contents2 = JSON.parse(data2);
    contents2.cities.sort(function (a,b){
       return a.population - b.population;
    });
    
   
 contents3 = Array.from(contents.cities).concat(Array.from(contents2.cities));
 
contents3.sort(function (a,b){
    return a.population - b.population;
 });
    
    fs.writeFile("staedteneuA2.1.json", JSON.stringify(contents3)); 
     
   
   var i;

   for(i=0;i< contents3.length;i++){
    
    console.log(chalk.blue('\n','name: ',contents3[i].name),
    chalk.red('\n country: ',contents3[i].country),
    chalk.yellow( '\n population: ',contents3[i].population),
            '\n --------------');
}


})
 });